import { Application } from "pixi.js";
import { size } from "../config";
import { assetLoader } from "../asset-loader";

async function createApp(): Promise<Application> {
  const app = new Application();
  (globalThis as any).__PIXI_APP__ = app;

  const appElement = document.querySelector("#app");
  await app.init({
    background: "#0e0014",
    height: size.height,
    width: size.width,
    antialias: true,
  });

  await assetLoader();

  if (appElement) appElement.appendChild(app.canvas);
  return app;
}

export { createApp };
