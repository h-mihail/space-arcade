import Phaser from "phaser"

class End extends Phaser.Scene {
  constructor() {
    super("end")
  }
  create() {
    const { width: gameWidth, height: gameHeight } = this.game.config

    this.add.bitmapText(
      40,
      40,
      "font",
      `
      THE END\n
      \n
      LEVEL 1\n
      SCORE 0\n
      \n
      PRESS SPACE TO COTINUE`,
      16,
      1
    )
  }
}

export default End
