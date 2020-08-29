import Phaser from "phaser"

export default class Explosion extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    super(scene, x, y, "explosion")

    scene.add.existing(this)
    this.play("explosion_anim")

    scene.time.addEvent({
      delay: 3000,
      callback: this.destroy,
      callbackScope: this,
      loop: false,
    })
  }
}
