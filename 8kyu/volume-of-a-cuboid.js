// Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

// Write a function to help Bob with this calculation.

//My solution

//take in three numbers l, w, h
//return a number showing volume

//EXAMPLES
// Kata.getVolumeOfCuboid(1, 2, 2) // 4
// Kata.getVolumeOfCuboid(6, 2, 5) // 60

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    //The formula for volume is l * w * h
    let volume = length * width * height
    return volume
  }
}