import { Controls, withControls } from "react-three-gui"
import { Canvas } from "react-three-fiber"
import Scene from "./SceneSetup/Scene"

const CustomCanvas = withControls(Canvas)

const App = () => {
  return (
    <Controls.Provider>
      <CustomCanvas>
        <Scene />
      </CustomCanvas>
      <Controls />
    </Controls.Provider>
  );
}

export default App;
