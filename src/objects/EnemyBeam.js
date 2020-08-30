import Phaser from "phaser"

export default class EnemyBeam extends Phaser.GameObjects.Sprite {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene, x, y) {
    super(scene, x, y, "beam")

    scene.add.existing(this)

    this.play(`red_beam_anim`)
  }
  update() {
    const { height: gameHeight } = this.scene.game.config
    if (this.y > gameHeight) this.destroy()
  }
}
