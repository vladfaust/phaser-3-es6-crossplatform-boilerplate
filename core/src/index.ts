import 'phaser'

import GameScene from './scenes/Game'

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: GameScene
}

export class Game extends Phaser.Game {
  constructor (config: GameConfig) {
    super(config)
    this.scene.add('GameScene', GameScene, false)
    this.scene.start('GameScene')
  }
}

window.onload = () => {
  /* eslint-disable no-unused-vars */
  var game = new Game(config)
}
