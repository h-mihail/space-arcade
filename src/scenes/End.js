import Phaser from "phaser"

class End extends Phaser.Scene {
  constructor() {
    super("end")
  }
  init(data) {
    this.score = data.score
    this.level = data.level
  }
  create() {
    this.add.bitmapText(
      44,
      40,
      "font",
      `
      THE END
      \n
      LEVEL ${this.level}
      SCORE ${this.score}
      \n
      PRESS ENTER TO RETRY
      \n
      PRESS ESC TO EXIT`,
      16,
      1
    )

    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    )
    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
  }
  update() {
    if (Phaser.Input.Keyboard.JustDown(this.enter)) {
      this.scene.start("play")
    }
    if (Phaser.Input.Keyboard.JustDown(this.esc)) {
      this.scene.start("menu")
    }
  }
}

export default End
