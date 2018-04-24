export default class Particles {
  particles
  emitter

  static textureName = 'red'
  static texturePath = 'images/particle-red.png'

  constructor (scene) {
    this.particles = scene.add.particles(Particles.textureName)

    this.emitter = this.particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })
  }

  startFollow (gameObject) {
    this.emitter.startFollow(gameObject)
  }

  static preload (scene) {
    scene.load.image(this.textureName, this.texturePath)
  }
}
