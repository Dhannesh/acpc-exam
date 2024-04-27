import Home from "./Home";
import logo from "./assets/logo.png";

import acmLogo from "./assets/acm-logo.jpg";
function App() {
  return (
    <>
      <nav className="bg-sky-600 m-0 p-2">
        <table>
          <tr>
            <td>
              <img src={logo} />
            </td>
            <td className="text-right">
              <img className="rounded-md ml-auto" src={acmLogo} />
            </td>
          </tr>
        </table>
      </nav>
      <Home />
    </>
  );
}

export default App;
