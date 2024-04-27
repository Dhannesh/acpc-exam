import { testLink } from "./assets/data";
import acpc from "./assets/acpc-logo.jpg";
const Home = () => {
  return (
    <section className="bg-gray-200 text-center p-5 w-full h-auto">
      <h2 className="text-5xl">Department of Computer Science</h2>
      <h2 className="text-4xl m-2">ACPC 2K24</h2>
      <h4 className="font-bold">Conquer The Code!</h4>
      <h3 className="font-bold text-red-600 mb-4">
        ABES Collegiate Programming Contest
      </h3>
      <a
        href={testLink}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mt-3 px-5 py-2.5">
        Start Assessment
      </a>
      <div className="flex flex-row justify-center items-center">
        <img className="mt-5 rounded-md h-48" src={acpc} />
      </div>
    </section>
  );
};

export default Home;
