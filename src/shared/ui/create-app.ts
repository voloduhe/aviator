import { Application } from "pixi.js";
import { size } from "../config";

async function createApp(): Promise<Application> {
  const app = new Application();
  (globalThis as any).__PIXI_APP__ = app;

  const appElement = document.querySelector("#app");
  await app.init({
    background: "#383838",
    height: size.height,
    width: size.width,
    antialias: true,
  });

  if (appElement) appElement.appendChild(app.canvas);
  return app;
}

export { createApp };
