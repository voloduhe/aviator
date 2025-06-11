import { Application, Graphics, Ticker, Text, Container } from "pixi.js";
import { Button } from "@pixi/ui";
import { size, crashSize } from "./shared/model";
import "./style.css";
import { lerp } from "./shared/lib";

(async () => {
  const app = await createApp();

  const crashMultiplier = +(Math.random() * 1999 + 1).toFixed(2); // crash at random point up to 2000x
  let multiplier = 1.0;
  let crashed = false;

  const bezier = new Graphics({
    position: {
      x: 50,
      y: crashSize.height + 50,
    },
    scale: {
      x: 0,
      y: 1,
    },
  });
  app.stage.addChild(bezier);

  const text = new Text({
    text: "1.00x",
    style: {
      fill: "white",
      fontSize: 40,
    },
    x: 60,
    y: 20,
  });

  app.stage.addChild(text);

  let y = 0;
  let controlPoint1x = 0;
  let controlPoint2x = crashSize.width / 2;
  const SPEED = 0.1;

  const ticker = new Ticker();
  ticker.add(() => {
    if (crashed) return;
    if (multiplier >= crashMultiplier) {
      crashed = true;
    }
    multiplier += SPEED;
    text.text = `${multiplier.toFixed(2)}x ${crashed ? "💥" : ""} (${crashMultiplier})`;
    if (y >= -crashSize.height) {
      y -= SPEED;
    }
    if (controlPoint2x <= crashSize.width) {
      controlPoint2x += SPEED;
    }
    if (controlPoint1x <= crashSize.width) {
      controlPoint1x += SPEED;
    }
    if (bezier.scale.x < 0.8) {
      bezier.scale.x += lerp(bezier.scale.x, 0.8, 0.01);
    }
    drawCurve(bezier, y);
  });

  const buttonStyle = new Container();
  const buttonContainer = new Graphics()
    .rect(50, 900, 200, 100)
    .fill(0x000000)
    .stroke({ width: 2, color: 0xff00ff });
  buttonContainer.addChild(
    new Text({
      text: "start",
      style: {
        fill: "white",
        fontSize: 45,
      },
      x: 100,
      y: 925,
    }),
  );
  buttonStyle.addChild(buttonContainer);
  const button = new Button(buttonStyle);
  button.onPress.connect(() => {
    ticker.start();
  });
  app.stage.addChild(button.view);

  setupResizeHandler(app);

  async function createApp(): Promise<Application> {
    const app = new Application();
    (globalThis as any).__PIXI_APP__ = app;

    const win = document.querySelector("#app");
    return app
      .init({ background: "#383838", height: size.height, width: size.width })
      .then(() => {
        if (win) {
          win.appendChild(app.canvas);
        }
        return app;
      });
  }

  function drawCurve(graphics: Graphics, top: number): void {
    graphics.clear();
    graphics.bezierCurveTo(
      controlPoint1x,
      0,
      controlPoint2x,
      0,
      crashSize.width,
      top,
    );
    graphics.stroke({ width: 5, color: crashed ? 0xff0000 : 0xffff00 });
  }

  function setupResizeHandler(app: Application): void {
    const resize = () => {
      const scaleX = window.innerWidth / size.width;
      const scaleY = window.innerHeight / size.height;
      const scale = Math.min(scaleX, scaleY);

      const newWidth = Math.floor(size.width * scale);
      const newHeight = Math.floor(size.height * scale);

      app.renderer.canvas.style.width = `${newWidth}px`;
      app.renderer.canvas.style.height = `${newHeight}px`;
      app.renderer.canvas.style.display = "block";
      app.renderer.canvas.style.margin = "auto";
    };

    window.addEventListener("resize", resize);
    resize();
  }
})();
