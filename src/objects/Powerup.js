import Phaser from "phaser"

export default class Powerup extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene, x, y) {
    super(scene, x, y, "powerup")

    scene.add.existing(this)
    scene.physics.world.enableBody(this)
    scene.physics.add.existing(this)
  }
}
