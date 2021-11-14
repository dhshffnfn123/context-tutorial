import React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}> {/* value를 설정하지 않으면 오류가 난다. */}
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;