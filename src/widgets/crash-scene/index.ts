import { Assets, Container, Sprite, Ticker, type Application } from "pixi.js";
import { BezierCurve } from "../../entities/bezier-curve";
import { MultiplierText } from "../../entities/multiplier-text";
import { StartButton } from "../../features/start-button";
import { useBezierTicker } from "../../entities/bezier-curve/model";
import { Background } from "../../entities/background";
import { Plane } from "../../entities/plane";
import { Logo } from "../../entities/logo";
import { Bets } from "../../features/bets";

function CrashScene(app: Application) {
  const ticker = new Ticker();
  const {
    bezier,
    text,
    ufo,
    crashed,
    update: updateBezier,
  } = useBezierTicker();

  const bg = new Sprite(Assets.get("bg"));
  const gameContainer = new Container();
  const logoContainer = new Container();
  gameContainer.label = "gameContainer";
  logoContainer.label = "logoContainer";
  gameContainer.y = 150;
  logoContainer.y = 50;
  bg.width = 1300;
  bg.height = 1920;
  app.stage.addChild(bg);
  app.stage.addChild(gameContainer);
  app.stage.addChild(logoContainer);

  const { update: updateBackground } = Background(gameContainer);
  BezierCurve(gameContainer, bezier);
  Plane(gameContainer, ufo);
  MultiplierText(gameContainer, text);
  StartButton(gameContainer, ticker);
  Bets(gameContainer);
  Logo(logoContainer);

  ticker.add(() => {
    updateBezier();
    updateBackground(crashed);
  });
}

export { CrashScene };
