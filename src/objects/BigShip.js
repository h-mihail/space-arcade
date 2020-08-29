import Phaser from "phaser"
import Ship from "./Ship"

export default class BigShip extends Ship {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   */
  constructor(scene, x, y) {
    super(scene, x, y, "ship3")
    this.scoreAward = 20
    this.hpMax = 5
    this.hp = this.hpMax
  }
  update() {
    super.moveShip(0.5)
  }
}

Phaser.GameObjects.GameObjectFactory.register("bigShip", function (x, y) {
  const bigShip = new BigShip(this.scene, x, y)

  this.displayList.add(bigShip)
  this.updateList.add(bigShip)

  return bigShip
})
