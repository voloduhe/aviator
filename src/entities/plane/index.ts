import type { Container } from "pixi.js";

function Plane(app: Container, plane: Container) {
  app.addChild(plane);
}

export { Plane };
