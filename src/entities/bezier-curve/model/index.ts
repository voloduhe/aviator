import { Graphics, Text } from "pixi.js";
import { crashSize, size } from "../../../shared/config";
import { lerp } from "../../../shared/lib/lerp";
import { mdeToNormal } from "../../../shared/lib/mde-to-normal";
import { UFO } from "../ui/ufo";

function getFormatterMultiplier(value: number, maxValue: number) {
  return value <= maxValue
    ? mdeToNormal(value).toFixed(2)
    : mdeToNormal(maxValue);
}

function useBezierTicker() {
  const crashMultiplier = Number((Math.random() * 1999).toFixed(2)) * 100;
  let multiplier = 0;
  let crashed = false;

  let y = 0;
  let controlPoint1x = 0;
  let controlPoint2x = crashSize.width / 2;

  const SPEED = 0.1;

  const bezier = new Graphics({
    position: { x: 75, y: crashSize.height + 100 },
    scale: { x: 0, y: 1 },
  });

  const text = new Text({
    text: "0.00x",
    style: {
      fontWeight: "bold",
      fontStyle: "italic",
      fill: "white",
      fontSize: 150,
      dropShadow: {
        blur: 50,
        color: 0xc4009b,
      },
    },
  });
  text.position = {
    x: size.width / 2 - text.width / 2,
    y: crashSize.height / 2,
  };

  const { ufo } = UFO();

  ufo.position = {
    x: 120,
    y: 780,
  };
  ufo.visible = false;
  ufo.scale = 0.15;

  function update() {
    if (crashed) return;
    if (multiplier >= crashMultiplier) crashed = true;
    if (!ufo.visible) ufo.visible = true;

    ufo.position.x = bezier.width + 70;
    if (ufo.position.y >= 124) ufo.position.y -= SPEED;

    multiplier += SPEED;
    text.text = `${getFormatterMultiplier(multiplier, crashMultiplier)}x ${crashed ? "💥" : ""}`;
    text.position = {
      x: size.width / 2 - text.width / 2,
      y: crashSize.height / 2,
    };

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
    bezier.stroke({ width: 4, color: 0xff6fb4 });
  }

  return {
    bezier,
    text,
    ufo,
    crashed,
    update,
  };
}

export { useBezierTicker };
