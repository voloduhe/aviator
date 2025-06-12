import { Assets, Container, Sprite, Ticker } from "pixi.js";

function UFO() {
  const svgTexture = Assets.get("ufo");
  const ufo = new Sprite(svgTexture);
  ufo.anchor.set(0.5, 0.5);

  const ufoContainer = new Container();
  ufoContainer.addChild(ufo);

  const amplitude = 5;
  const speed = 0.05;
  let time = 0;

  const ticker = new Ticker();
  ticker.add(() => {
    time += speed;
    ufoContainer.angle = Math.sin(time) * amplitude;
  });
  ticker.start();

  return { ufo: ufoContainer };
}
export { UFO };
