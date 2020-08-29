import Phaser from "phaser"

export default class Score extends Phaser.GameObjects.Graphics {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    super(scene)
    const { width: gameWidth, height: gameHeight } = scene.game.config

    const graphics = scene.add.graphics()
    graphics.fillStyle("Black")
    graphics.fillRect(0, 0, gameWidth, 20)
    graphics.setDepth(1)

    this.scoreLabel = scene.add.bitmapText(10, 5, "font", "SCORE 0", 16)
    this.scoreLabel.setDepth(2)

    this.livesLabel = scene.add.bitmapText(
      gameWidth - 50,
      5,
      "font",
      "LIVES 3",
      16
    )
    this.livesLabel.setDepth(2)

    scene.physics.world.setBounds(0, 20, gameWidth, gameHeight - 20)
  }
  zeroPad(number, size) {
    let stringNumber = String(number)
    while (stringNumber.length < (size || 2)) {
      stringNumber = `0${stringNumber}`
    }
    return stringNumber
  }
  setScore(amount) {
    this.scoreLabel.text = `SCORE ${amount}`
  }
  setLives(amount) {
    this.livesLabel.text = `LIVES ${amount}`
  }
}
