import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

const ContextAppHook = () => {
  return (
    <ThemeContext.Provider value="lavender">
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

const ThemeButton = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

const Button = () => {
  const value = useContext(ThemeContext);
  return (
    <div style={{ margin: 50, padding: 50, backgroundColor: value }}>
      <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
      <button>확인</button>
    </div>
  );
};
export default ContextAppHook;
