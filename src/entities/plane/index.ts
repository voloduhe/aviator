import type { Application, Text } from "pixi.js";

function Plane(app: Application, plane: Text) {
  app.stage.addChild(plane);
}

export { Plane };
