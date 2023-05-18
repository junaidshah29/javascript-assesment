var names = ["Maria", "Antony", "Joy", "Juan"]

function insertName(name) {
    names.push(name);
}


console.log(insertName('Junaid'));

function checkName(name, list) {
    return list.includes(name);
  }

 
function compareLists(list1, list2) {
    let matches = [];
    
    
    for (let i=0; i<list1.length; i++) {
      if (list2.includes(list1[i])) {
        matches.push(list1[i]);
      }
    }
    return matches;
  }

  //Function to return an array of name lengths 
function getNameLengths(list) {
    //Create an empty array to store the name lengths
    let lengths = [];
    
    //Loop through each item in the list
    for (let i=0; i<list.length; i++) {
      //Push the length of the name to the lengths array
      lengths.push(list[i].length);
    }
    //Return the lengths array
    return lengths;
  }