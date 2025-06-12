import { Graphics, Text } from "pixi.js";
import { crashSize } from "../../../shared/config";
import { lerp } from "../../../shared/lib/lerp";
import { mdeToNormal } from "../../../shared/lib/mde-to-normal";

function getFormatterMultiplier(value: number, maxValue: number) {
  return value <= maxValue
    ? mdeToNormal(value).toFixed(1)
    : mdeToNormal(maxValue);
}

function useBezierTicker() {
  const crashMultiplier = Number((Math.random() * 1999).toFixed(1)) * 100;
  let multiplier = 100;
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
    text: "0.00x",
    style: { fill: "white", fontSize: 40 },
    x: 100,
    y: 100,
  });

  const plane = new Text({
    text: "✈️",
    style: { fontSize: 60 },
    x: 100,
    y: 770,
  });

  function update() {
    if (crashed) return;
    if (multiplier >= crashMultiplier) crashed = true;

    plane.position.x = bezier.width;
    if (plane.position.y >= 124) plane.position.y -= SPEED;

    multiplier += SPEED;
    text.text = `${getFormatterMultiplier(multiplier, crashMultiplier)}x ${crashed ? "💥" : ""} (${mdeToNormal(crashMultiplier)})`;

    if (y >= -crashSize.height + 50) y -= SPEED;
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
  }

  return {
    bezier,
    text,
    plane,
    crashed,
    update,
  };
}

export { useBezierTicker };
