import Phaser from "phaser"
import Powerup from "./Powerup"

export default class PowerupGroup extends Phaser.Physics.Arcade.Group {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    super(scene.physics.world, scene, {
      velocityX: Phaser.Math.Between(50, 100),
      velocityY: Phaser.Math.Between(50, 100),
      collideWorldBounds: true,
      bounceX: 1,
      bounceY: 1,
    })

    scene.add.existing(this)
  }
  addPowerup(x, y) {
    const powerup = new Powerup(this.scene, x, y)
    this.scene.powerups.add(powerup)
  }
}
