import React, { useState } from 'react';

export const MyContext = React.createContext();

function Context(props) {
  const [display, setDisplay] = useState(false);

  const isDisplay = () => {
    setDisplay(!display);
  };

  return (
    <MyContext.Provider value={{ display, isDisplay }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Context;
