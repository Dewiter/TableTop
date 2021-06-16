"use strict"
import  Map  from './map.js'
import Player from './player.js'

class Game {
  constructor(config) {
    const player  = new Player(config.player);
  }

  getMap(map) {
    return new Map(map);
  }
}

export default Game
