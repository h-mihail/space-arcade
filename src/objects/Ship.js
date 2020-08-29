import Phaser from "phaser"
import Explosion from "./Explosion"

export default class Ship extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string} key
   */
  constructor(scene, x, y, key) {
    super(scene, x, y, key)
    this.gameConfig = this.scene.game.config

    this.play(`${key}_anim`)

    this.setInteractive()
    this.registerEvents()
  }
  registerEvents() {
    this.scene.input.on("gameobjectdown", this.destroyShip)
  }
  damageShip() {
    this.hp -= 1
    if (this.hp === 0) this.destroyShip()
  }
  destroyShip() {
    new Explosion(this.scene, this.x, this.y)

    if (Math.random() < 0.05) this.scene.powerups.addPowerup(this.x, this.y)

    this.resetShipPosition()
  }
  moveShip(speed) {
    const { height: gameHeight } = this.gameConfig

    this.y += speed
    if (this.y > gameHeight) {
      this.resetShipPosition()
    }
  }
  resetShipPosition() {
    const { width: gameWidth } = this.gameConfig
    const randomX = Phaser.Math.Between(16, gameWidth - 16)

    this.hp = this.hpMax
    this.y = 0
    this.x = randomX
  }
}
