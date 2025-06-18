import { Assets, Container, Sprite, type Ticker } from "pixi.js";

function StartButton(app: Container, ticker: Ticker) {
  const asset = Assets.get("make_bet_button");
  const assetDisabled = Assets.get("make_bet_disabled_button");
  const button = new Sprite(asset);

  const container = new Container();
  container.addChild(button);
  container.interactive = true;
  container.cursor = "pointer";

  container.on("click", () => {
    ticker.start();
    button.texture = assetDisabled;
    container.interactive = false;
    container.cursor = "default";
  });
  container.on("mousedown", () => {
    button.texture = assetDisabled;
  });
  container.on("mouseupoutside", () => {
    button.texture = asset;
  });

  container.position = {
    x: 35,
    y: 850,
  };
  container.scale = 1.3;

  app.addChild(container);
}

export { StartButton };
