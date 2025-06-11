import { Container, Application, Graphics } from "pixi.js";
class Plane extends Container {
  planeLine: Graphics;

  constructor(app: Application) {
    super();
    this.planeLine = new Graphics();
    this.addChild(this.planeLine);

    this.drawCurve();
  }

  drawCurve() {
    this.planeLine.clear();

    const lineStyle = {
      width: 10,
      color: 0xff0000,
    };
    this.planeLine.lineStyle(lineStyle.width, lineStyle.color);

    const startX = 100;
    const startY = 1600;

    const controlX = 540;
    const controlY = 800;

    const endX = 980;
    const endY = 300;

    this.planeLine.moveTo(startX, startY);
    this.planeLine.quadraticCurveTo(controlX, controlY, endX, endY);
  }
}

export { Plane };
