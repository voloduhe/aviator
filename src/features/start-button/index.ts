import { Container, Graphics, Text, type Ticker } from "pixi.js";
import { Button } from "@pixi/ui";

function StartButton(app: Container, ticker: Ticker) {
  const buttonStyle = new Container();
  const buttonContainer = new Graphics()
    .rect(50, 900, 200, 100)
    .fill(0x000000)
    .stroke({ width: 2, color: 0xffff00 });
  buttonContainer.addChild(
    new Text({
      text: "start",
      style: { fill: "white", fontSize: 45 },
      x: 100,
      y: 925,
    }),
  );
  buttonStyle.addChild(buttonContainer);

  const button = new Button(buttonStyle);
  button.onPress.connect(() => ticker.start());
  app.addChild(button.view);
}

export { StartButton };
