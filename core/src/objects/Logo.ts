export default class Logo extends Phaser.GameObjects.Image {
  static textureName = 'logo'
  static texturePath = 'images/phaser3-logo.png'

  constructor (scene: Phaser.Scene, x, y) {
    super(scene, x, y, Logo.textureName)

    scene.add.existing(this)
    scene.physics.add.existing(this)

    let physics = this.body as Phaser.Physics.Arcade.Body

    physics.setVelocity(400, 400)
    physics.setBounce(1, 1)
    physics.setCollideWorldBounds(true)
  }

  static preload (scene) {
    scene.load.image(this.textureName, this.texturePath)
  }
}
