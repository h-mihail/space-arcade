import Phaser from "phaser"
import { Scene1, Scene2 } from "./scenes"

const config = {
  width: 256,
  height: 276,
  backgroundColor: "0 x 000000",
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
}

window.onload = () => {
  const Game = new Phaser.Game(config)
}
