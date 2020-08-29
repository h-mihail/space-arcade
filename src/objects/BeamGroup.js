import Phaser from "phaser"
import Beam from "./Beam"

export default class BeamGroup extends Phaser.Physics.Arcade.Group {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    super(scene.physics.world, scene, {
      velocityY: -250,
    })

    scene.add.existing(this)
  }
  update() {
    this.getChildren().forEach((child) => {
      child.update()
    })
  }
  addBeam(x, y) {
    const beam = new Beam(this.scene, x, y)
    this.scene.beams.add(beam)
  }
}
