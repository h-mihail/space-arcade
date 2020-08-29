import Phaser from "phaser"
import Ship from "./Ship"

export default class MediumShip extends Ship {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    super(scene, x, y, "ship2")
    this.scoreAward = 10
    this.hpMax = 3
    this.hp = this.hpMax
  }
  update() {
    super.moveShip(0.75)
  }
}

Phaser.GameObjects.GameObjectFactory.register("mediumShip", function (x, y) {
  const mediumShip = new MediumShip(this.scene, x, y)

  this.displayList.add(mediumShip)
  this.updateList.add(mediumShip)

  return mediumShip
})
