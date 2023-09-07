import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={onClickCount}>増加</button>
    </div>
  );
  F;
}

export default Counter;
