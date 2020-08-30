import Phaser from "phaser"

class End extends Phaser.Scene {
  constructor() {
    super("end")
  }
  init(data) {
    this.score = data.score
  }
  create() {
    this.add.bitmapText(
      40,
      40,
      "font",
      `
      THE END\n
      \n
      LEVEL 1\n
      SCORE ${this.score}\n
      \n
      PRESS SPACE TO COTINUE`,
      16,
      1
    )

    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )
  }
  update() {
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.scene.start("play")
    }
  }
}

export default End
