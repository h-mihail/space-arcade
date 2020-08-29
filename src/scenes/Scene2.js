import Phaser from "phaser"
import {
  Score,
  Player,
  BeamGroup,
  Explosion,
  EnemyGroup,
  PowerupGroup,
} from "../objects"

class Scene2 extends Phaser.Scene {
  constructor() {
    super("play")
  }
  create() {
    this.background = this.add.background("desert")

    this.score = new Score(this)

    this.beams = new BeamGroup(this)

    this.player = new Player(this)

    this.powerups = new PowerupGroup(this)

    this.enemies = new EnemyGroup(this)
    this.enemies.addSmallEnemy()
    this.enemies.addMediumEnemy()
    this.enemies.addBigEnemy()

    this.physics.add.collider(this.beams, this.powerups, (beam, powerup) => {
      beam.destroy()
    })

    this.physics.add.overlap(this.player, this.powerups, (player, powerup) => {
      powerup.destroy()
      player.upgradeBeamLevel()
    })

    this.physics.add.overlap(this.player, this.enemies, (player, enemy) => {
      enemy.destroyShip()

      // Make player immune after dying
      if (player.alpha < 1) return

      player.die()
    })

    this.physics.add.overlap(this.beams, this.enemies, (beam, enemy) => {
      beam.destroy()
      enemy.damageShip()

      this.player.addScore(enemy.scoreAward)
    })
  }
  update() {
    this.background.update()
    this.player.update()
    this.enemies.update()
    this.beams.update()
  }
}

export default Scene2
