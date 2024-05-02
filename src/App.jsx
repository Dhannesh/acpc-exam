import Home from "./Home";
import logo from "./assets/logo.png";

import acmLogo from "./assets/acm-logo.jpg";
function App() {
  return (
    <>
      <div className="bg-sky-600 m-0 p-2 flex flex-row justify-between items-center">
        <img src={logo} />
      </div>
      <Home />
    </>
  );
}

export default App;
