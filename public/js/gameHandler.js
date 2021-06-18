"use strict"
import  Map  from './map.js'
import Player from './player.js'

class Game {
  constructor(config) {
    this.player  = new Player(config.player.one);
  }

  getMap(map) {
    return new Map(map);
  }
}

export default Game
