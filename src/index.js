module.exports = function reverse (a) {

    if (a>=0) {
      let b=Number(a.toString().split("").reverse().join(""));
      return b;
    } else if (a<0){
      let c=Number(Math.abs(a).toString().split("").reverse().join(""));
      return c;
  
    }
   
  }