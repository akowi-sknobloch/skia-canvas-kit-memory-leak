import InitCanvasKit, { CanvasKit } from "canvaskit-wasm";

function newImage(canvasKit: CanvasKit, iteration: number) {
  console.log('creating new image')

  const surface = canvasKit.MakeSurface(512, 512);

  if (surface) {
    const imageSnapshot = surface.makeImageSnapshot();

    imageSnapshot.delete();
    surface.delete();
  }

  console.log(`${process.pid} initial memory usage after ${iteration} iterations`, process.memoryUsage())

  setTimeout(() => newImage(canvasKit, iteration + 1), 1000)
}

(async () => {
  const canvasKit = await InitCanvasKit();

  console.log('initial memory usage', process.memoryUsage());

  newImage(canvasKit, 1);
})();
