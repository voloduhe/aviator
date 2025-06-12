import { Graphics, type Application } from "pixi.js";
import { crashSize } from "../../shared/config";

function Background(app: Application) {
  const bg = new Graphics()
    .rect(50, 50, crashSize.width, crashSize.height + 50)
    .fill(0x000000)
    .stroke({ width: 4, color: 0xffff00 });

  function createHorizontalLines(): Graphics {
    const lines = new Graphics();

    for (let y = 0; y <= crashSize.height; y += 50) {
      lines
        .moveTo(50, y + 50)
        .lineTo(crashSize.width + 50, y + 50)
        .stroke({
          width: 2,
          color: 0x525200,
        });
    }

    return lines;
  }

  const lines = createHorizontalLines();

  app.stage.addChild(bg);
  app.stage.addChild(lines);

  const SPEED = 0.4;

  function update(crashed: boolean) {
    if (crashed) return;

    if (lines.y <= 49) {
      lines.y += SPEED;
    } else {
      lines.y = 1;
    }
  }

  return { update };
}

export { Background };
