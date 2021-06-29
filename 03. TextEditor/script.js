//TODO: Convert all the functions and any other possible elements to ES6

/**
 * Update the output text as you type in the textarea
 */

/*function updateText(){
  let text = document.getElementById("text-input").value;
  document.getElementById('text-output').innerText = text;
} */
 updateText = ()=> {
  let text = document.getElementById("text-input").value;
  document.getElementById('text-output').innerText = text;
}

/**
 * Toggle the bold class for the output text
 */
 makeBold = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
 makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

/**
 * Toggle the underline class for the output text
 */
 makeUnderline = (elem) => {
    elem.classList.toggle('active');
    let output = document.getElementById('text-output');
    if(output.classList.contains('underline')){
      output.classList.remove('underline');
    } else {
      output.classList.add('underline');
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
 alignText = (elem, alignType) => {
  document.getElementById('text-output').style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName('align');
  console.log(alignButtons);
  for(let button of alignButtons){
    button.classList.remove('active');
    console.log(button);
  }
 
  elem.classList.toggle('active');
}




//////////////////////////////////////////////////

//let searchResults = 1;
//let output = `${searchResults > 0 ? `${searchResults} results` : "No search Results"}`
//console.log(output);



//Arrow Function//
/*
getFullName = () =>{
  let firstName = "Nazary";
  let lastName  = "Duman"
  return `${firstName} ${lastName}`;
}
// let output = getFullName();
// console.log(output)

let firstName = "Nazariy";
let lastName = "Duman";
getFullNameShorter = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
console.log("Shorted Example");
getFullNameShorter(firstName, lastName);
*/


///Iterating////
let fruits = ["apple","banana","orange","cherries","jackfruit"];

// console.log("For Loop:");
// for(let index = 0; index < fruits.length; index++){
//   console.log(fruits[index]);
// }

// console.log("For-Of:");
// for(let fruit of fruits){
//   console.log(fruit);
// }

// console.log("forEach: ");
// fruits.forEach((fruit) =>{
//   console.log(fruit);
// });

  // console.log("Map: ");
  // fruits.map((fruit) =>{
  // console.log(fruit)
  // })




  ////promises//////////////
  /*
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({
      //   firstName : "Nazary",
      //   lastName : "Dumansky"
      // });
      reject("Something Went Wrong");
    }, 1000); 
  })
  promise.then((Response)=>{
    console.log("Here is the response after 1 s : ");
    console.log((Response));
  }).catch((error)=>{
    console.log(error);
  })
  console.log("This is part 1");
*/

  ///Fetch Data From API //////

  let userPromise = fetch("https://randomuser.me/api/sejfnlsk");
  console.log(userPromise);
  userPromise.then((response) => {
    return response.json();
  }).then((resData)=>{
    console.log(resData.results[0].name.first);
    console.log(resData.results[0].name.last);
  })
  .catch((error) => { 
    console.log(error);
  })