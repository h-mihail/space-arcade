import Phaser from "phaser"

export default class Background extends Phaser.GameObjects.TileSprite {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {integer} width
   * @param {integer} height
   * @param {string} textureKey
   */
  constructor(scene, x, y, width, height, textureKey) {
    super(scene, x, y, width, height, textureKey)
    this.setOrigin(0, 0)
  }
  update() {
    this.tilePositionY -= 0.5
  }
}

Phaser.GameObjects.GameObjectFactory.register("background", function (
  textureKey
) {
  const { width: gameWidth, height: gameHeight } = this.scene.game.config
  const background = new Background(
    this.scene,
    0,
    0,
    gameWidth,
    gameHeight,
    textureKey
  )

  this.displayList.add(background)

  return background
})
