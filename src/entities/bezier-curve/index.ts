import type { Container, Graphics } from "pixi.js";

function BezierCurve(app: Container, bezier: Graphics) {
  app.addChild(bezier);
}

export { BezierCurve };
