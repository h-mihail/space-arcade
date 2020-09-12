import Phaser from "phaser"
import {
  Score,
  Player,
  BeamGroup,
  EnemyGroup,
  PowerupGroup,
  EnemyBeamGroup,
} from "../objects"

class Scene2 extends Phaser.Scene {
  constructor() {
    super("play")
  }
  create() {
    this.background = this.add.background("desert")
    this.beamSound = this.sound.add("audio_beam")
    this.explosionSound = this.sound.add("audio_explosion")
    this.powerupSound = this.sound.add("audio_powerup")
    this.music = this.sound.add("audio_music")

    const musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }
    this.music.play(musicConfig)

    this.score = new Score(this)

    this.beams = new BeamGroup(this)
    this.enemyBeams = new EnemyBeamGroup(this)

    this.player = new Player(this)

    this.powerups = new PowerupGroup(this)

    this.enemies = new EnemyGroup(this)
    this.enemies.addEnemies()

    this.physics.add.collider(this.beams, this.powerups, (beam, powerup) => {
      beam.destroy()
    })

    this.physics.add.overlap(this.player, this.enemyBeams, (player, beam) => {
      beam.destroy()

      // Make player immune after dying
      if (player.alpha < 1) return

      player.die()
    })

    this.physics.add.overlap(this.player, this.powerups, (player, powerup) => {
      powerup.destroy()
      player.upgradeBeamLevel()
      this.powerupSound.play()
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
