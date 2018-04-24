import Background from '../objects/Background'
import FPS from '../objects/FPS'
import Logo from '../objects/Logo'
import Particles from '../objects/Particles'

export default class extends Phaser.Scene {
  private fps
  private background
  private logo
  private particles

  preload () {
    Background.preload(this)
    Logo.preload(this)
    Particles.preload(this)
  }

  create () {
    this.background = new Background(this, 300, 300)
    this.fps = new FPS(this, 10, 10)
    this.particles = new Particles(this)
    this.logo = new Logo(this, 150, 300)
    this.particles.startFollow(this.logo)
  }

  update () {
    this.fps.onUpdate(this)
  }
}
