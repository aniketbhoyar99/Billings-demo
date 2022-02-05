import React from 'react'

const RadioInput = ({value,percent}) => {
    return (
      <>
        <input type="radio" value={value} onClick={(e) => percent(e.target.value)} />
      </>
    );
}

export default RadioInput;
