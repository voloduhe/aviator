import { Assets, Container, Sprite, Texture } from "pixi.js";

function Bets(app: Container) {
  const amounts = [1, 2, 5, 10, 20];
  const buttonSprites: Sprite[] = [];

  const buttonAssets: Texture[] = amounts.map((item) =>
    Assets.get(`${item}_dollar`),
  );
  const buttonAssetsDisabled: Texture[] = amounts.map((item) =>
    Assets.get(`${item}_dollar_disabled`),
  );

  const minusAsset: Texture = Assets.get("minus");
  const minusAssetDisabled: Texture = Assets.get("minus_disabled");
  const plusAsset: Texture = Assets.get("plus");
  const plusAssetDisabled: Texture = Assets.get("plus_disabled");

  let selectedIndex = 0;

  const plusButton = new Sprite(plusAsset);
  const minusButton = new Sprite(minusAsset);

  const updateSelection = (newIndex: number) => {
    for (let i = 0; i < buttonSprites.length; i++) {
      const isSelected = i === newIndex;
      buttonSprites[i].texture = isSelected
        ? buttonAssetsDisabled[i]
        : buttonAssets[i];
    }
    selectedIndex = newIndex;

    plusButton.texture =
      selectedIndex >= amounts.length - 1 ? plusAssetDisabled : plusAsset;
    minusButton.texture = selectedIndex <= 0 ? minusAssetDisabled : minusAsset;

    plusContainer.cursor =
      selectedIndex >= amounts.length - 1 ? "default" : "pointer";
    minusContainer.cursor = selectedIndex <= 0 ? "default" : "pointer";
  };

  for (let i = 0; i < amounts.length; i++) {
    const button = new Sprite(buttonAssets[i]);
    button.anchor.set(0.5, 0.5);
    const container = new Container();
    container.addChild(button);
    container.interactive = true;
    container.cursor = "pointer";

    container.on("click", () => {
      updateSelection(i);
    });
    container.on("mousedown", () => {
      button.scale.set(0.9);
    });
    container.on("mouseup", () => {
      button.scale.set(1);
    });
    container.on("mouseupoutside", () => {
      button.scale.set(1);
    });

    container.position.set(230 + 150 * i, 1050);
    container.scale.set(1.2, 1.3);

    buttonSprites.push(button);
    app.addChild(container);
  }

  plusButton.anchor.set(0.5, 0.5);
  minusButton.anchor.set(0.5, 0.5);

  const minusContainer = new Container();
  minusContainer.addChild(minusButton);
  minusContainer.interactive = true;
  minusContainer.position.set(95, 1050);
  minusContainer.scale.set(1.3);
  minusContainer.on("click", () => {
    if (selectedIndex > 0) {
      updateSelection(selectedIndex - 1);
    }
  });
  app.addChild(minusContainer);

  // Plus Button
  const plusContainer = new Container();
  plusContainer.addChild(plusButton);
  plusContainer.interactive = true;
  plusContainer.cursor = "pointer";
  plusContainer.position.set(200 + 150 * amounts.length + 20, 1050);
  plusContainer.scale.set(1.3);
  plusContainer.on("click", () => {
    if (selectedIndex < amounts.length - 1) {
      updateSelection(selectedIndex + 1);
    }
  });

  plusContainer.on("mousedown", () => {
    if (!(selectedIndex >= amounts.length - 1)) plusButton.scale.set(0.9);
  });
  plusContainer.on("mouseup", () => {
    plusButton.scale.set(1);
  });
  minusContainer.on("mouseupoutside", () => {
    plusButton.scale.set(1);
  });
  minusContainer.on("mousedown", () => {
    if (!(selectedIndex <= 0)) minusButton.scale.set(0.9);
  });
  minusContainer.on("mouseup", () => {
    minusButton.scale.set(1);
  });
  plusContainer.on("mouseupoutside", () => {
    minusButton.scale.set(1);
  });

  app.addChild(plusContainer);

  updateSelection(selectedIndex);
}

export { Bets };
