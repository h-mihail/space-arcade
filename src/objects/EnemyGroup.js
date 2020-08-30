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
  addEnemies() {
    this.scene.time.addEvent({
      delay: 2000,
      callback: this.addSmallEnemy,
      callbackScope: this,
      loop: false,
    })
    this.scene.time.addEvent({
      delay: 3000,
      callback: this.addMediumEnemy,
      callbackScope: this,
      loop: false,
    })
    this.scene.time.addEvent({
      delay: 4000,
      callback: this.addBigEnemy,
      callbackScope: this,
      loop: false,
    })
  }
  addSmallEnemy() {
    const enemy = this.scene.add.smallShip(
      Phaser.Math.Between(32, this.config.width - 32),
      0
    )
    this.add(enemy)
  }
  addMediumEnemy() {
    const enemy = this.scene.add.mediumShip(
      Phaser.Math.Between(32, this.config.width - 32),
      0
    )
    this.add(enemy)
  }
  addBigEnemy() {
    const enemy = this.scene.add.bigShip(
      Phaser.Math.Between(32, this.config.width - 32),
      0
    )
    this.add(enemy)
  }
}
