import { Assets } from "pixi.js";

async function assetLoader() {
  await Assets.load([
    {
      alias: "wheel",
      src: "/assets/wheel.svg",
    },
    {
      alias: "ufo",
      src: "/assets/ufo.svg",
    },
  ]);
}

export { assetLoader };
