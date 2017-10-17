
function Person(){
  age = 0;

  setInterval(() => {
    age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();

var foo = ()=>{
    console.log(arguments);
}
