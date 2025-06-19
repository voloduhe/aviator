import { Assets } from "pixi.js";

async function assetLoader() {
  await Assets.load([
    {
      alias: "wheel",
      src: "/assets/wheel.svg",
    },
    {
      alias: "ufo",
      src: "/assets/ufo.svg",
    },
    {
      alias: "girl",
      src: "/assets/girl.png",
    },
    {
      alias: "bg",
      src: "/assets/bg.jpg",
    },
    {
      alias: "make_bet_button",
      src: "/assets/make_bet.png",
    },
    {
      alias: "make_bet_disabled_button",
      src: "/assets/make_bet_disabled.png",
    },
    {
      alias: "1_dollar",
      src: "/assets/1_dollar.png",
    },
    {
      alias: "2_dollar",
      src: "/assets/2_dollar.png",
    },
    {
      alias: "5_dollar",
      src: "/assets/5_dollar.png",
    },
    {
      alias: "10_dollar",
      src: "/assets/10_dollar.png",
    },
    {
      alias: "20_dollar",
      src: "/assets/20_dollar.png",
    },
    ///////////////
    {
      alias: "1_dollar_disabled",
      src: "/assets/1_dollar_disabled.png",
    },
    {
      alias: "2_dollar_disabled",
      src: "/assets/2_dollar_disabled.png",
    },
    {
      alias: "5_dollar_disabled",
      src: "/assets/5_dollar_disabled.png",
    },
    {
      alias: "10_dollar_disabled",
      src: "/assets/10_dollar_disabled.png",
    },
    {
      alias: "20_dollar_disabled",
      src: "/assets/20_dollar_disabled.png",
    },
    {
      alias: "minus_disabled",
      src: "/assets/minus_disabled.png",
    },
    {
      alias: "plus_disabled",
      src: "/assets/plus_disabled.png",
    },
    {
      alias: "minus",
      src: "/assets/minus.png",
    },
    {
      alias: "plus",
      src: "/assets/plus.png",
    },
    {
      alias: "prev_bets",
      src: "/assets/prev_bets.png",
    },
  ]);
}

export { assetLoader };
