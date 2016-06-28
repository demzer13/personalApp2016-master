//create a "class" for complex numbers...
/*
//create a costructor with 2 fileds: re,im
function ComplexNumber(re,im){
  this.re = re;
  this.im = im;
}

//doubles the real and imaginary parts of z
ComplexNumber.prototype.double=function(){
  this.re = 2*this.re;
  this.im = 2*this.im;
}
const num = new ComplexNumber(1,2);
num.double();

console.dir(num);
console.dir(ComplexNumber);

//squares the complex number
ComplexNumber.prototype.square=function(){
  const re1 = this.re*this.re - this.im * this.im;
  const im1 = 2*this.re*this.im;
  this.re = re1;
  this.im = im1;
}

num.square();

myobj = (function(){
  //define a bunch of stuff with new functions,
  //temp variables
  //all hidden from rest of program (encapsulation)
  function a(x) {return x*2}
  const b = [1,2,3]
  return{
    a:a,//reveal this value
    b:b,//and this
  }

}

Template.testing.helpers({//helper method provides a way for making javascript values available to html
  num: function(){return num;}
});
*/
