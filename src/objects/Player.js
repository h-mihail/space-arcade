import Phaser from "phaser"
import Explosion from "./Explosion"

export default class Player extends Phaser.Physics.Arcade.Sprite {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene) {
    const { width: gameWidth, height: gameHeight } = scene.game.config
    super(scene, gameWidth / 2, gameHeight - 64, "player")

    this.lives = 3
    this.score = 0
    this.maxBeamLevel = 3
    this.beamLevel = 1

    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
    this.play(`player_anim`)
    this.cursorKeys = scene.input.keyboard.createCursorKeys()
    this.spacebar = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    )

    this.intro()
  }
  update() {
    const speed = 3

    if (this.cursorKeys.left.isDown) {
      this.body.x -= speed
    } else if (this.cursorKeys.right.isDown) {
      this.body.x += speed
    }

    // Disable shooting and moving on Y after dying
    if (!this.active || this.alpha < 1) return

    if (this.cursorKeys.up.isDown) {
      this.body.y -= speed
    } else if (this.cursorKeys.down.isDown) {
      this.body.y += speed
    }

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.shootBeam()
    }
  }

  downgradeBeamLevel() {
    if (this.beamLevel > 1) this.beamLevel -= 1
  }
  upgradeBeamLevel() {
    if (this.beamLevel < this.maxBeamLevel) this.beamLevel += 1
  }
  addScore(amount) {
    this.score += amount
    this.scene.score.setScore(this.score)
  }
  shootBeam() {
    const y = this.y - 16
    switch (this.beamLevel) {
      default:
        this.scene.beams.addBeam(this.x, y)
        break
      case 2:
        this.scene.beams.addBeam(this.x - 4, y)
        this.scene.beams.addBeam(this.x + 4, y)
        break
      case 3:
        this.scene.beams.addBeam(this.x - 8, y, -15)
        this.scene.beams.addBeam(this.x, y)
        this.scene.beams.addBeam(this.x + 8, y, 15)
        break
    }
  }
  die() {
    new Explosion(this.scene, this.x, this.y)
    this.disableBody(true, true)

    this.lives -= 1
    this.scene.score.setLives(this.lives)
    if (this.lives === 0) this.scene.scene.start("end", { score: this.score })
    this.downgradeBeamLevel()

    this.scene.time.addEvent({
      delay: 1000,
      callback: this.resetPosition,
      callbackScope: this,
      loop: false,
    })
  }
  intro() {
    const { width: gameWidth, height: gameHeight } = this.scene.game.config

    this.y = gameHeight - 16
    this.scene.tweens.add({
      targets: this,
      y: gameHeight - 64,
      ease: "Power1",
      duration: 1500,
      repeat: 0,
      onComplete: () => {},
      callbackScope: this,
    })
  }
  resetPosition() {
    const { width: gameWidth, height: gameHeight } = this.scene.game.config

    this.alpha = 0.5
    this.enableBody(true, gameWidth / 2, gameHeight - 16, true, true)

    this.scene.tweens.add({
      targets: this,
      y: gameHeight - 64,
      ease: "Power1",
      duration: 1500,
      repeat: 0,
      onComplete: () => {
        this.alpha = 1
      },
      callbackScope: this,
    })
  }
}
