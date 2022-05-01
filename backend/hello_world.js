// var y = 0;
// var x = null;
// for(var i=0; i<5; i++){
//     y+=1
// }
// // console.log(y);


// test(5);

// function test(z){
//     console.log(z+"hello");
// }
// var catSays = function(max) {
//     var catMessage = "";
//     for (var i = 0; i < max; i++) {
//       catMessage += "meow ";
//     }
//     return catMessage;
//   };
  
//   // 函数声明 helloCat 接受一个回调
//   function helloCat(callbackFunc, time) {
//     return "Hello " + callbackFunc(time);
//   }
  
//   // catSays 作为回调函数传入
//   console.log(helloCat(catSays,20));

//   var x = ["hello", "hello2", "hello3"]
//   for(var i=0; i<x.length; i++){
//       console.log(x[i])
//   }
//   x.push("hello4")
//   console.log(x)

// var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

// donuts.splice(-2, 1, "chocolate frosted", "glazed");
// console.log(donuts.length);

// donuts.forEach(element => console.log(element))
// donuts.forEach(function(donut){
//     donut+="xxxxxxxxxxxxxx"
//     console.log(donut)
// })
// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// // Write your code here
// test.forEach(function(element, index){
//     if(element%3 == 0){
//         test[index] = element+100;
//     }
// })
// console.log(test);

// var test_2 = test.map(function(element){
//     element =element+100;
//     return element;
// })
// console.log(test_2);
var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     }
  };
  console.log(umbrella.color);
  console.log(umbrella["color"])