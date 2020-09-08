import Phaser from "phaser"

class Menu extends Phaser.Scene {
  constructor() {
    super("menu")
  }
  create() {
    this.add.bitmapText(
      40,
      40,
      "font",
      `
      GREETINGS, PILOT\n
      \n
      USE ARROW KEYS TO MOVE\n
      SHOOT BY PRESSING SPACE\n
      \n
      PRESS SPACE TO START`,
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

export default Menu
