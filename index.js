// function nameIs () {
//   console.log("Jyldyz");
// }

// nameIs ();
// nameIs ();


// function name0Republic(name1,name2) {
//  console.log(num1 + num2)
// }
// name0Republic(5,5);
// name0Republic(10,10);





// let = 5;
// let = 5;
// function isEven(a) {

//   if (a%2 ===1) {
//     console.log("is not honest ")
//   }
//   else {
//     console.log("is honest")
//   }
// }


function countup(a, b) {
  let ot = a;
  while (ot <= b) {
    console.log(ot)
    ot++;
  }
}
countup(5,10)
countup(-10,10)


function countdown(a, b){
  let ot = a;
  while (ot >= b) {
    console.log(ot)
    ot--;
  }
}
countdown(10, 5);
countdown(10, -10)

function countup(a ,b) {
  for (let i = a; i<= b; i++) {
    console.log(i);
  }
}
count (5, 10);
count(10, 5);

function count (a, b) {
  if ( a <b) {
    countup (a,b);
  }
  else {
    countdown (a,b);
  }
}


let names = ["Aidai","Bakyt","Joldosh"];

for (let i = 0; i < names.length;  i++) {
  console.log("Hi,they are" + names [i] + ".Nice.");
}


let imya = ["Joldosh","Bakyt","Aidai"];

 for (let i = imya.length - 1; i >= 0 ; i--) {
  console.log("Hi"+imya[i] + "Nice");
 }


 //Aidai -5
 //Bakyt -5
 //Joldosh -7

 