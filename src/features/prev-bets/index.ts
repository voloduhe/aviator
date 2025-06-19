import { Assets, Container, Graphics, Sprite, Text } from "pixi.js";

function PrevBets(app: Container) {
  const nums = [48.5, 3.67, 34.53, 32.68, 2.7, 7.77, 45.88, 14.88];
  const betsInRow = 8;
  const c = new Container();
  c.position = {
    x: 420,
    y: 867,
  };
  c.width = 596;
  c.height = 77;

  const asset = Assets.get("prev_bets");

  const button = new Sprite(asset);
  button.scale.set(1.04, 1.3);

  const container = new Container();
  container.addChild(button);

  container.position = {
    x: 390,
    y: 850,
  };
  for (let i = 0; i < betsInRow; i++) {
    const getColor = (num: number) => {
      if (num <= 1) {
        return 0xd00000;
      }
      if (num > 1 && num <= 5) {
        return 0xd0bb00;
      }
      if (num > 5) return 0x238e00;
    };

    const text = new Text({
      text: nums[i],
      style: {
        fontWeight: "bold",
        fontStyle: "italic",
        fill: getColor(nums[i]),
        fontSize: 24,
      },
    });
    const textContainer = new Container();
    textContainer.addChild(text);
    text.position = {
      x: 596 / betsInRow / 2 - text.width / 2,
      y: 77 / 2 - text.height / 2,
    };
    textContainer.position = {
      x: 0 + i * (596 / betsInRow),
      y: 0,
    };
    c.addChild(textContainer);

    const line = new Graphics().rect(0, 0, 1, 77).fill(0x828282);
    line.position.x = 596 / betsInRow + (596 / betsInRow) * i;
    c.addChild(line);
  }

  app.addChild(container);
  app.addChild(c);
}

export { PrevBets };
