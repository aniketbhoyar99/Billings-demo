import React from 'react'

const SumOpratin = () => {
  
  const sumCalculation=(arg) =>{
    var newnum= parseInt(arg) 
    if (newnum < 10) {
      return newnum;
    };
    return sumCalculation(
      (newnum % 10) + sumCalculation(Math.floor(newnum / 10))
    );
  }

  console.log("..", sumCalculation("555"));

  return <div></div>;
};

export default SumOpratin;







