let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(customers) {
  for (var i = 0; i < customers.Length; i++) {
    if (typeof customers[i] != 'string') {
      console.log(`Type error: ${customers[i]} should be a string!`)
    }
  }
}

checkCustomersArray(customersArray);
