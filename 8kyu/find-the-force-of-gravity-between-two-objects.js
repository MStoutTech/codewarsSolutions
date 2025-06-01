// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
// input

// Two arrays are given :

//     arr_val (value array), consists of 3 elements
//         1st element : mass of obj 1
//         2nd element : mass of obj 2
//         3rd element : distance between their centers
//     arr_unit (unit array), consists of 3 elements
//         1st element : unit for mass of obj 1
//         2nd element : unit for mass of obj 2
//         3rd element : unit for distance between their centers

// mass units are :

//     kilogram (kg)
//     gram (g)
//     milligram (mg)
//     microgram (μg)
//     pound (lb)

// distance units are :

//     meter (m)
//     centimeter (cm)
//     millimeter (mm)
//     micrometer (μm)
//     feet (ft)

// Note

// value of G = 6.67 × 10−11 N⋅kg−2⋅m2

// 1 ft = 0.3048 m

// 1 lb = 0.453592 kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution





// My solution
solution = (arr_val, arr_unit) => {
  const G = 6.67 * Math.pow(10, -11);
  let m1 = 0;
  let m2 = 0;
  let d = 0;
  
  // convert first mass to kg
  if (arr_unit[0] === "kg"){
    m1 = arr_val[0];
  } else if (arr_unit[0] === "g"){
    m1 = arr_val[0] / 1000;
  } else if (arr_unit[0] === "mg"){
    m1 = arr_val[0] / 1000000;
  } else if (arr_unit[0] === "μg"){
    m1 = arr_val[0] / 1000000000;
  } else if(arr_unit[0] === "lb"){
    m1 = arr_val[0] * 0.453592; 
  }
  
 // convert second mass to kg 
  if (arr_unit[1] === "kg"){
    m2 = arr_val[1];
  } else if (arr_unit[1] === "g"){
    m2 = arr_val[1] / 1000;
  } else if (arr_unit[1] === "mg"){
    m2 = arr_val[1] / 1000000;
  } else if (arr_unit[1] === "μg"){
    m2 = arr_val[1] / 1000000000;
  } else if(arr_unit[1] === "lb"){
    m2 = arr_val[1] * 0.453592; 
  }
  
  // convert distance to m
  if (arr_unit[2] === "m"){
    d = arr_val[2];
  } else if (arr_unit[2] === "cm"){
    d = arr_val[2] / 100;
  } else if (arr_unit[2] === "mm"){
    d = arr_val[2] / 1000;
  } else if (arr_unit[2] === "μm"){
    d = arr_val[2] / 1000000;
  } else if(arr_unit[2] === "ft"){
    d = arr_val[2] * 0.3048;
  }
  
  // calculate
  
  return (G * m1 * m2) / (d**2);
};