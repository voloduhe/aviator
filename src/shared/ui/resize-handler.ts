import { Application } from "pixi.js";
import { size } from "../config";

function resizeHandler(app: Application): void {
  const resize = () => {
    const scaleX = window.innerWidth / size.width;
    const scaleY = window.innerHeight / size.height;
    const scale = Math.min(scaleX, scaleY);

    app.renderer.canvas.style.width = `${Math.floor(size.width * scale)}px`;
    app.renderer.canvas.style.height = `${Math.floor(size.height * scale)}px`;
    app.renderer.canvas.style.display = "block";
    app.renderer.canvas.style.margin = "auto";
  };

  window.addEventListener("resize", resize);
  resize();
}

export { resizeHandler };
