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

/**
 * Class Human that creates the Human.
 * @param {string} sound the sound the animal makes.
 * @param {integer} legs the number of leg of the animal
 * @constructor
 */

class Human extends Animal {
  constructor(sound, legs, name) {
    super(sound,legs);
    this.name = name;
  }

  speak() {
    var talks = this.name + 'speaks' + this.sound;
    return talks
  }

  hasHowManyLegs() {
    return this.legs
  }
}
