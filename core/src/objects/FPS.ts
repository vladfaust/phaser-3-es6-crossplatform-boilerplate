export default class FPS extends Phaser.GameObjects.Text {
  constructor (scene: Phaser.Scene, x, y) {
    super(scene, x, y, FPS.template(0), {
      color: '#00ff00'
    })
    scene.add.existing(this)
  }

  onUpdate (scene: Phaser.Scene) {
    this.setText(FPS.template(Math.round(scene.sys.game.loop.actualFps)))
  }

  private static template (fpsCount) {
    return `FPS: ${fpsCount}`
  }
}
