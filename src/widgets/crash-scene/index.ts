import { Ticker, type Application } from "pixi.js";
import { BezierCurve } from "../../entities/bezier-curve";
import { MultiplierText } from "../../entities/multiplier-text";
import { StartButton } from "../../features/start-button";
import { useBezierTicker } from "../../entities/bezier-curve/model";
import { Background } from "../../entities/background";
import { Plane } from "../../entities/plane";

function CrashScene(app: Application) {
  const ticker = new Ticker();
  const {
    bezier,
    text,
    plane,
    crashed,
    update: updateBezier,
  } = useBezierTicker();

  const { update: updateBackground } = Background(app);
  BezierCurve(app, bezier);
  Plane(app, plane);
  MultiplierText(app, text);
  StartButton(app, ticker);

  ticker.add(() => {
    updateBezier();
    updateBackground(crashed);
  });
}

export { CrashScene };
