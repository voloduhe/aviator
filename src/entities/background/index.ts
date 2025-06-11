import type { Application, Graphics } from "pixi.js";

function Background(app: Application, bg: Graphics) {
  app.stage.addChild(bg);
}

export { Background };
