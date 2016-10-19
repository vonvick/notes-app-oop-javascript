/**
 * Class Animal that creates the Animal.
 * @param {string} sound the sound the animal makes.
 * @param {integer} legs the number of leg of the animal
 * @constructor
 */

class Animal {
  constructor(sound, legs) {
    this.sound = sound;
    this.legs = legs;
  }

  speak() {
    return this.sound;
  }

  hasHowManyLegs() {
    return this.legs;
  }
}

