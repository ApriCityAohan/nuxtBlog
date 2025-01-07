<template>
  <div
    class="fixed bottom-0 top-0 left-0 right-0 pointer-events-none select-none dark:bg-black"
    style="z-index: -1"
  >
    <canvas ref="el" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts" setup>
import type { Fn } from "@vueuse/core";

/* 弧度 */
const r180 = Math.PI; // 180°
const r90 = r180 / 2; // 90°
const r15 = r90 / 12; // 15°

/* 树干颜色 */
const color = "#88888825";

/* 画布 */
const el = ref<HTMLCanvasElement>();

/* 随机数方法 */
const { random } = Math;
/* 窗口尺寸 */
const size = reactive(useWindowSize());

/* 启动动画的函数 */
const start = ref<Fn>(() => {});

const MIN_BRANCH = 30; // 是最小分支数，用于控制树枝的分支行为
const len = ref(6); // 树干长度

/* 动画是否停止Flag */
const stopped = ref(false);

/**
 *  初始化画布
 * @param canvas 画布
 * @param width 画布宽度
 * @param height 画布高度
 * @param _dpi DPI
 */
function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) {
  const ctx = canvas.getContext("2d");
  /**
   * 获取设备的像素比（Device Pixel Ratio, DPR）。DPR表示物理像素与CSS像素的比例。例如，Retina显示屏的DPR通常是2。
   */
  const dpr = window.devicePixelRatio || 1;
  /**
   * 获取Canvas的backingStorePixelRatio，这是一个与Canvas内部缓冲区相关的属性，用于处理不同浏览器的兼容性问题
   */
  const bsr =
    // @ts-expect-error
    ctx.webkitBackingStorePixelRatio ||
    // @ts-expect-error
    ctx.mozBackingStorePixelRatio ||
    // @ts-expect-error
    ctx.msBackingStorePixelRatio ||
    // @ts-expect-error
    ctx.oBackingStorePixelRatio ||
    // @ts-expect-error
    ctx.backingStorePixelRatio ||
    1;
  // 计算最终的DPI缩放比例
  const dpi = dpr / bsr;

  // 设置画布的实际大小
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  // 设置画布的绘图表面的大小（宽度和高度）
  canvas.width = width * dpi;
  canvas.height = height * dpi;
  // 设置画布的缩放比例
  ctx?.scale(dpi, dpi);

  return { ctx, dpi };
}

/**
 *  将极坐标转换为直角坐标
 *
 * @param x - 直角坐标系中原点的 x 坐标，默认值为 0。
 * @param y - 直角坐标系中原点的 y 坐标，默认值为 0。
 * @param r - 极坐标中的半径，默认值为 0。
 * @param theta - 极坐标中的角度（以弧度为单位），默认值为 0。
 * @returns  - 返回一个数组 `[x + dx, y + dy]`，表示极坐标点在直角坐标系中的位置。
 */
function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  // 将极坐标中的半径 r 和角度 theta 转换为直角坐标系中的 x 轴增量 dx
  // Math.cos(theta) 计算角度的余弦值，乘以半径 r 得到 x 方向的增量
  const dx = r * Math.cos(theta);
  // 将极坐标中的半径 r 和角度 theta 转换为直角坐标系中的 y 轴增量 dy
  // Math.sin(theta) 计算角度的正弦值，乘以半径 r 得到 y 方向的增量
  const dy = r * Math.sin(theta);
  // 返回直角坐标系中的坐标点 [x + dx, y + dy]
  // x 和 y 是原点坐标，dx 和 dy 是极坐标转换后的增量
  return [x + dx, y + dy];
}

onMounted(() => {
  // 获取canvas元素
  const canvas = el.value!;
  // 初始化画布
  const { ctx } = initCanvas(canvas, size.width, size.height);
  // 获取canvas的高度和宽度
  const { width, height } = canvas;

  let steps: Fn[] = []; // 存储每一步的函数
  let prevSteps: Fn[] = []; // 存储上一步的函数

  /**
   *  生成树枝
   *
   * @param x - 起点 x 坐标
   * @param y - 起点 y 坐标
   * @param rad - 角度
   * @param counter - 树枝的深度
   */
  const step = (x: number, y: number, rad: number, counter: { value: number } = { value: 0 }) => {
    // 是当前树枝的长度，随机生成。
    const length = random() * len.value;
    // 是一个对象，用于记录当前树枝的深度
    counter.value += 1;

    // 用于计算树枝的终点坐标
    const [nx, ny] = polar2cart(x, y, length, rad);

    ctx?.beginPath(); // 开始绘制路径
    ctx?.moveTo(x, y); // 移动到起点
    ctx?.lineTo(nx, ny); // 画一条线到终点
    ctx?.stroke(); // 绘制路径

    const rad1 = rad + random() * r15; // 生成一个随机的角度（左）
    const rad2 = rad - random() * r15; // 生成一个随机的角度（右）

    // 防止树枝过长超出画布
    if (nx < -100 || nx > size.width + 100 || ny < -100 || ny > size.height + 100) return;
    // 如果树枝的深度小于最小分支数，则继续生成树枝
    const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

    // 画布左分支
    if (random() < rate) {
      steps.push(() => step(nx, ny, rad1, counter));
    }
    // 画布右分支
    if (random() < rate) {
      steps.push(() => step(nx, ny, rad2, counter));
    }
  };

  // 当前高精度时间戳
  let lastTime = performance.now();
  // 画布的动画帧数
  const interval = 1000 / 40; // 50FPS
  // 用于控制动画的启动和暂停
  let controls: ReturnType<typeof useRafFn>;

  // 每一帧的回调函数
  const frame = () => {
    // 如果当前时间戳与上一次时间戳的差值小于动画帧间隔，则直接返回
    if (performance.now() - lastTime < interval) return;

    prevSteps = steps; // 保存上一步的树枝
    steps = []; // 清空当前树枝
    lastTime = performance.now(); // 更新时间戳

    if (!prevSteps.length) {
      controls.pause(); // 如果上一步的树枝为空，则停止动画
      stopped.value = true; // 设置动画停止Flag
    }

    // 遍历上一步的树枝，绘制树枝
    prevSteps.forEach((fn) => {
      // 50%的概率，随机插入树枝
      if (random() < 0.5) steps.push(fn);
      // 执行树枝绘制函数
      else fn();
    });
  };

  // 使用useRafFn创建一个动画控制器
  controls = useRafFn(frame, { immediate: false });

  const randomMiddle = () => random() * 0.6 + 0.2; // 生成一个随机的树干长度

  start.value = () => {
    controls.pause(); // 暂停动画
    /* 开始绘制 */
    ctx!.clearRect(0, 0, width, height); // 清空画布
    ctx!.lineWidth = 1; // 设置线宽
    ctx!.strokeStyle = color; // 设置线条颜色

    prevSteps = []; // 清空上一步的树枝
    steps = [
      () => step(randomMiddle() * size.width, -5, r90),
      () => step(randomMiddle() * size.width, size.height + 5, -r90),
      () => step(-5, randomMiddle() * size.height, 0),
      () => step(size.width + 5, randomMiddle() * size.height, r180),
    ];

    // 如果画布宽度小于500，则只绘制两个树干
    if (size.width < 500) {
      steps = steps.slice(0, 2);
    }

    controls.resume(); // 启动动画
    stopped.value = false; // 设置动画停止Flag
  };

  start.value(); // 启动动画
});
</script>

<style></style>
