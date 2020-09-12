import Phaser from "phaser"
import { background, powerup } from "../assets/images"
import {
  beamMp3,
  beamOgg,
  musicOgg,
  musicMp3,
  powerupOgg,
  powerupMp3,
  explosionOgg,
  explosionMp3,
} from "../assets/audio"
import {
  ship1,
  ship2,
  ship3,
  player,
  blue_beam,
  pink_beam,
  explosion,
  registerAnimations,
} from "../assets/sprites"
import { font, fontXML } from "../assets/font"

class Scene1 extends Phaser.Scene {
  constructor() {
    super("boot")
  }
  preload() {
    this.load.bitmapFont("font", font, fontXML)

    this.load.image("desert", background)
    this.load.image("powerup", powerup, {
      frameWidth: 16,
      frameHeight: 16,
    })

    this.load.audio("audio_beam", [beamOgg, beamMp3])
    this.load.audio("audio_music", [musicOgg, musicMp3])
    this.load.audio("audio_powerup", [powerupOgg, powerupMp3])
    this.load.audio("audio_explosion", [explosionOgg, explosionMp3])

    this.load.spritesheet("ship1", ship1, { frameWidth: 16, frameHeight: 16 })
    this.load.spritesheet("ship2", ship2, { frameWidth: 32, frameHeight: 16 })
    this.load.spritesheet("ship3", ship3, { frameWidth: 32, frameHeight: 32 })
    this.load.spritesheet("player", player, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet("explosion", explosion, {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.spritesheet("blue_beam", blue_beam, {
      frameWidth: 8,
      frameHeight: 16,
    })
    this.load.spritesheet("pink_beam", pink_beam, {
      frameWidth: 8,
      frameHeight: 8,
    })
  }
  create() {
    this.add.text(20, 20, "Loading game...")

    registerAnimations(this.anims)

    this.scene.start("menu")
  }
}

export default Scene1
