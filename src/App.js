import "./App.less";
import { Button } from "antd";
import ColorPicker from "./color";
import "./styles/index.less";

function App() {
  return (
    <div className="App">
      <span className="p_c">我是颜色</span>
      <Button
        type="primary"
        onClick={() => {
          window.less.modifyVars({
            "@primary-color": "#cccccc",
          });
        }}
      >
        Primary Button
      </Button>
      <ColorPicker />
    </div>
  );
}

export default App;
