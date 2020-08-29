import Phaser from "phaser"

export default class Beam extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene, x, y) {
    super(scene, x, y, "beam")

    scene.add.existing(this)
    scene.physics.world.enableBody(this)
    scene.physics.add.existing(this)

    this.play(`beam_anim`)
  }
  update() {
    if (this.y < 0) this.destroy()
  }
}
