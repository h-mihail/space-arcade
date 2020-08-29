import Phaser from "phaser"
import Ship from "./Ship"

export default class SmallShip extends Ship {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    super(scene, x, y, "ship1")
    this.scoreAward = 15
    this.hpMax = 1
    this.hp = this.hpMax
  }
  update() {
    super.moveShip(1)
  }
}

Phaser.GameObjects.GameObjectFactory.register("smallShip", function (x, y) {
  const smallShip = new SmallShip(this.scene, x, y)

  this.displayList.add(smallShip)
  this.updateList.add(smallShip)

  return smallShip
})
