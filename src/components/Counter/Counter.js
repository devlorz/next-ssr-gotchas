"use client";
import React from "react";

import Spinner from "../Spinner/Spinner";

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const savedValue = window.localStorage.getItem("saved-count");

    if (savedValue === null) {
      return;
    }

    setCount(Number(savedValue));
  }, []);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count === null ? <Spinner /> : count}
    </button>
  );
}

export default Counter;
