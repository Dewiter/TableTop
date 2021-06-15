"use strict"
import  Map  from './map.js'
import Player from './player.js'

class Game {
  constructor(config) {
    const map     = new Map(config.map);
    const player  = new Player(config.player);
  }
}

export default Game
