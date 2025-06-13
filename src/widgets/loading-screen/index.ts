import {
  Application,
  Assets,
  Container,
  FillGradient,
  Graphics,
  Sprite,
  Text,
} from "pixi.js";
import { size } from "../../shared/config";

function LoadingScreen(app: Application) {
  const texture = Assets.get("girl");
  const girl = new Sprite(texture);
  const bg = new Graphics().rect(0, 0, size.width, size.height).fill(
    new FillGradient({
      end: { x: 1, y: 0 },
      colorStops: [
        { offset: 0, color: 0x290026 },
        { offset: 0.5, color: 0x1a0024 },
        { offset: 1, color: 0x15002b },
      ],
    }),
  );

  girl.anchor.set(0.5, 0.5);
  const girlContainer = new Container();
  girlContainer.addChild(girl);
  girlContainer.position = {
    x: size.width / 2,
    y: size.height / 2,
  };
  const button = new Container();
  button.addChild(
    new Graphics()
      .roundRect(0, 0, 600, 170)
      .fill(
        new FillGradient({
          end: { x: 1, y: 0 },
          colorStops: [
            { offset: 0, color: 0xe6aa12 },
            { offset: 1, color: 0xe6c312 },
          ],
        }),
      )
      .stroke({
        width: 2,
        color: 0xffffff,
      }),
  );
  const text = new Text({
    text: "Play!",
    style: {
      fontWeight: "bold",
      fontStyle: "italic",
      fill: 0x292304,
      fontSize: 100,
    },
  });
  text.position = {
    x: button.width / 2 - text.width / 2,
    y: button.height / 2 - text.height / 2,
  };

  button.addChild(text);

  button.position = {
    x: size.width / 2 - button.width / 2,
    y: 1473,
  };
  button.interactive = true;
  button.cursor = "pointer";

  button.on("click", () => {
    bg.destroy();
    button.destroy();
    girlContainer.destroy();
  });
  button.on("mouseover", () => {
    text.style.fill = 0xffffff;
    text.style.stroke = {
      width: 5,
      color: 0x292304,
    };
  });
  button.on("mouseleave", () => {
    text.style = {
      fontWeight: "bold",
      fontStyle: "italic",
      fill: 0x292304,
      fontSize: 100,
    };
  });

  app.stage.addChild(bg);
  app.stage.addChild(button);
  app.stage.addChild(girlContainer);
}

export { LoadingScreen };
