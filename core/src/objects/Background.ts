export default class Background extends Phaser.GameObjects.Image {
  static textureName = 'sky'
  static texturePath = 'images/space.png'

  constructor (scene, x, y) {
    super(scene, x, y, Background.textureName)
    scene.add.existing(this)
  }

  static preload (scene) {
    scene.load.image(this.textureName, this.texturePath)
  }
}
