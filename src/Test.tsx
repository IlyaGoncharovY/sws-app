import React from 'react';

function Test() {

  const foo = () => {
    console.log(1111);
  };

  return (
    <div onClick={foo}>
            11111
    </div>
  );
}

export default Test;
