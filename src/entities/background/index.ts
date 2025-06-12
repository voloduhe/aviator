import { type Container, Graphics } from "pixi.js";
import { crashSize } from "../../shared/config";
import { BeamWheel } from "./ui/beam-wheel";

function Background(app: Container) {
  const mask = new Graphics()
    .roundRect(50, 50, crashSize.width, crashSize.height + 50, 25)
    .fill(0x000000);
  const bg = new Graphics()
    .roundRect(50, 50, crashSize.width, crashSize.height + 50, 25)
    .fill(0x000000)
    .stroke({ width: 4, color: 0x3c3440 });
  bg.filters = [];

  function createHorizontalLines(): Record<string, Graphics> {
    const linesHorizontal = new Graphics();
    const linesVertical = new Graphics();

    for (let y = 0; y <= crashSize.height; y += 50) {
      linesHorizontal
        .moveTo(50, y + 50)
        .lineTo(crashSize.width + 50, y + 50)
        .stroke({
          width: 2,
          color: 0x3c3440,
        });
    }
    for (let x = 0; x <= crashSize.width + 100; x += 50) {
      linesVertical
        .moveTo(x + 50, 50)
        .lineTo(x + 50, crashSize.width + 50)
        .stroke({
          width: 2,
          color: 0x3c3440,
        });
    }

    linesHorizontal.mask = mask;
    linesVertical.mask = mask;

    return { linesHorizontal, linesVertical };
  }

  const { linesHorizontal, linesVertical } = createHorizontalLines();
  const { wheel } = BeamWheel();
  wheel.mask = mask;
  wheel.alpha = 0.2;
  wheel.scale = 10;
  wheel.position.y = crashSize.height + 100;
  wheel.anchor.set(0.5, 0.5);

  app.addChild(bg);
  app.addChild(mask);
  app.addChild(wheel);
  app.addChild(linesHorizontal);
  app.addChild(linesVertical);

  const SPEED = 0.4;

  function update(crashed: boolean) {
    if (crashed) return;

    if (linesHorizontal.y <= 49) {
      linesHorizontal.y += SPEED;
    } else {
      linesHorizontal.y = 1;
    }

    if (linesVertical.x >= -49) {
      linesVertical.x -= SPEED;
    } else {
      linesVertical.x = 1;
    }

    wheel.rotation += (SPEED / 4) * (Math.PI / 180);
  }

  return { update };
}

export { Background };
