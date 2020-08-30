import Phaser from "phaser"
import Beam from "./Beam"

export default class BeamGroup extends Phaser.Physics.Arcade.Group {
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
  addBeam(x, y, angle) {
    const beam = new Beam(this.scene, x, y)
    this.add(beam)
    beam.body.setVelocityY(-200)
    beam.body.setVelocityX(angle || 0)
  }
}
