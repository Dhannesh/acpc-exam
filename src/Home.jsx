import { testLink } from "./assets/data";
import acpc from "./assets/acpc-logo.jpg";
const Home = () => {
  return (
    <section className="bg-gray-200 text-center p-5 w-full">
      <div>
        <h2 className="text-5xl">Department of Computer Science</h2>
        <h2 className="text-4xl m-2">ACPC 2K24</h2>
        <h4 className="font-bold">Conquer The Code!</h4>
        <br />
        <a
          href={testLink}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mt-3 px-5 py-2.5">
          Start Assessment
        </a>
      </div>
      <table>
        <tr>
          <td align="center" className="text-center">
            <img className="mt-5 rounded-md w-20" src={acpc} />
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Home;