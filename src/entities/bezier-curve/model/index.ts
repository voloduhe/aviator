import { Graphics, Text, Ticker } from "pixi.js";
import { crashSize } from "../../../shared/config";
import { lerp } from "../../../shared/lib/lerp";

function useBezierTicker() {
  const crashMultiplier = +(Math.random() * 1999 + 1).toFixed(2);
  let multiplier = 1.0;
  let crashed = false;

  let y = 0;
  let controlPoint1x = 0;
  let controlPoint2x = crashSize.width / 2;

  const SPEED = 0.1;

  const bezier = new Graphics({
    position: { x: 50, y: crashSize.height + 100 },
    scale: { x: 0, y: 1 },
  });
  const text = new Text({
    text: "1.00x",
    style: { fill: "white", fontSize: 40 },
    x: 100,
    y: 100,
  });
  const bg = new Graphics()
    .rect(50, 50, crashSize.width, crashSize.height + 50)
    .fill(0x000000)
    .stroke({ width: 4, color: 0xffff00 });

  const ticker = new Ticker();

  ticker.add(() => {
    if (crashed) return;
    if (multiplier >= crashMultiplier) crashed = true;

    multiplier += SPEED;
    text.text = `${multiplier.toFixed(2)}x ${crashed ? "💥" : ""} (${crashMultiplier})`;

    if (y >= -crashSize.height) y -= SPEED;
    if (controlPoint2x <= crashSize.width) controlPoint2x += SPEED;
    if (controlPoint1x <= crashSize.width) controlPoint1x += SPEED;

    if (bezier.scale.x < 0.8) bezier.scale.x += lerp(bezier.scale.x, 0.8, 0.01);

    bezier.clear();
    bezier.bezierCurveTo(
      controlPoint1x,
      0,
      controlPoint2x,
      0,
      crashSize.width,
      y,
    );
    bezier.stroke({ width: 4, color: crashed ? 0xff0000 : 0xffff00 });
  });

  return { bezier, text, bg, ticker };
}

export { useBezierTicker };
