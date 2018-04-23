import Phaser from 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

let game, fps

window.addEventListener('load', () => {
  game = new Phaser.Game(config)
})

function preload () {
  this.load.image('sky', 'images/space.png')
  this.load.image('logo', 'images/phaser3-logo.png')
  this.load.image('red', 'images/particle-red.png')
}

function create () {
  this.add.image(300, 300, 'sky')

  fps = this.make.text({
    x: 10,
    y: 10,
    text: 'FPS: 0',
    style: {
      color: '#00ff00'
    }
  })

  var particles = this.add.particles('red')

  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  })

  var logo = this.physics.add.image(150, 300, 'logo')

  logo.setVelocity(100, 100)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  emitter.startFollow(logo)
}

function update () {
  fps.setText('FPS: ' + Math.round(game.loop.actualFps))
}
