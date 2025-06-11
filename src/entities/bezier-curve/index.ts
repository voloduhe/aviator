import type { Application, Graphics } from "pixi.js";

function BezierCurve(app: Application, bezier: Graphics) {
  app.stage.addChild(bezier);
}

export { BezierCurve };
