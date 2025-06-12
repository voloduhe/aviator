import { type Container, Text, TextStyle } from "pixi.js";
import { size } from "../../shared/config";

function Logo(app: Container) {
  const style = new TextStyle({
    fontFamily: "Arial",
    fontSize: 80,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: {
      alpha: 0,
    },
    stroke: { color: 0xffffff, width: 2 },
    dropShadow: {
      color: 0xf1c9ff,
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
  });
  const logo = new Text({
    text: "VOLODUHE BETS",
    style,
  });

  app.addChild(logo);
  logo.x = size.width / 2 - logo.width / 2;
}

export { Logo };
