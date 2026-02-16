import "./App.css";
import { MainPage } from "./MainPage/MainPage";
// import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/400.css"; // Specify weight
import "@fontsource/lato/400-italic.css"; // Specify weight and style

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
