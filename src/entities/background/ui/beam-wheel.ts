import { Assets, Sprite } from "pixi.js";

function BeamWheel() {
  const svgTexture = Assets.get("wheel");
  const wheel = new Sprite(svgTexture);

  return { wheel };
}

export { BeamWheel };
