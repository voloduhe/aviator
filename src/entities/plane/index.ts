import type { Container, Text } from "pixi.js";

function Plane(app: Container, plane: Text) {
  app.addChild(plane);
}

export { Plane };
