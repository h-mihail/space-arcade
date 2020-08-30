import Phaser from "phaser"
import EnemyBeam from "./EnemyBeam"

export default class EnemyBeamGroup extends Phaser.Physics.Arcade.Group {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    super(scene.physics.world, scene)
    scene.add.existing(this)
  }
  update() {
    this.getChildren().forEach((child) => {
      child.update()
    })
  }
  addBeam(x, y) {
    const beam = new EnemyBeam(this.scene, x, y)
    this.add(beam)
    beam.body.setVelocityY(200)
  }
}
