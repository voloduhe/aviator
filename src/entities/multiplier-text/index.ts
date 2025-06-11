import type { Application, Text } from "pixi.js";

function MultiplierText(app: Application, text: Text) {
  app.stage.addChild(text);
}

export { MultiplierText };
