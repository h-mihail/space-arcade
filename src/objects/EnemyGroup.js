import Phaser from "phaser"

export default class EnemyGroup extends Phaser.Physics.Arcade.Group {
  /**
   * @param {Phaser.Scene} scene
   */
  constructor(scene) {
    super(scene.physics.world, scene)
    this.config = this.scene.game.config
    scene.add.existing(this)
  }
  update() {
    this.getChildren().forEach((child) => {
      child.update()
    })
  }
  addSmallEnemy() {
    const enemy = this.scene.add.smallShip(
      Phaser.Math.Between(32, this.config.width - 32),
      32
    )
    this.add(enemy)
  }
  addMediumEnemy() {
    const enemy = this.scene.add.mediumShip(
      Phaser.Math.Between(32, this.config.width - 32),
      32
    )
    this.add(enemy)
  }
  addBigEnemy() {
    const enemy = this.scene.add.bigShip(
      Phaser.Math.Between(32, this.config.width - 32),
      32
    )
    this.add(enemy)
  }
}
