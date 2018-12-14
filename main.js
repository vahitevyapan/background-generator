// var vahit = {
//     calculateAge: function(){
//         //var birthYear = 1980;
//      this.age = this.now - this.birthYear;
//     },
//     sname: 'evyapan',
//     birthYear: 1984,
//     now: 2018,
//     test: 10 - 1
// }
// vahit.calculateAge();

// console.log(vahit);

// var x = [1,2,3];
// var y = new Array(3,4,5);

// var obj = new Object();
// obj.data = 'veri kaydı';
// obj.number = 123;
// obj.method = function(){};

// vahit.calculateAge();
// console.log(vahit);
// console.log(x);
// console.log(y);
// console.log(obj);

// var a = 9;
// var b = 9;
// var c = a+b;
// console.log(c);
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }
// var names = ["ali","ahmet","mehmet","vahit","hakim"];
//console.log(names.length);

// for (var i = names.length - 1; i >= 0; i--){
//     console.log(names[i]);
// }

// for (var i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i)
// }

// var birth1 = [1984,1986,2008,2010];
// var birth2 = [1904,1946,1008,2000];
// var arrEmp = [];
// var now = 2018;

// var obj = {
//     g: {l:4,m:5,n:6},
//     a:1,
//     b:2,
//     c:3,
//     f:function(){
//      //var g = {l:4,m:5,n:6}
//      this.d =  this;
//     }
// }
// window.obj.f();
// console.log(obj);

// function printFullAge (years){
//     var fullAges = [];
//     for (var i = 0; i < years.length; i++){
//         //arrEmp.push(now - years[i]);
//         arrEmp[i] = now - years[i];
//     }

//     console.log(arrEmp);
//     console.log(this);

//    for (var i = 0; i < arrEmp.length; i++) {
//        if (arrEmp[i] >= 18){
//            console.log('person ' +(i+1) + ' is '+arrEmp[i]+'years old.'+'Youre full age');
//            fullAges.push(true);
//        }else{
//            console.log('person '+(i+1)+' youre ergen :)');
//            fullAges.push(false);
//        }
//    }
//    console.log(fullAges)
//    fullAges.push('vahit');
//    return fullAges;
// }
// var x = printFullAge(birth2);
// console.log(x);
// console.log(this);
// console.log(window);
// var name = 'vahit';

// if (name === window.name){
//     console.log('true');
// }else console.log('false');

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// function isValid(bool){
//   return bool;
// }

// var answer = isValid(false) ? "valid" : "not valid" ;
