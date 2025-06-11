import type { Application } from "pixi.js";
import { BezierCurve } from "../../entities/bezier-curve";
import { MultiplierText } from "../../entities/multiplier-text";
import { StartButton } from "../../features/start-button";
import { useBezierTicker } from "../../entities/bezier-curve/model";
import { Background } from "../../entities/background";

function CrashScene(app: Application) {
  const { bezier, text, bg, ticker } = useBezierTicker();
  Background(app, bg);
  BezierCurve(app, bezier);
  MultiplierText(app, text);
  StartButton(app, ticker);
}

export { CrashScene };
