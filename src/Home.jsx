import { testLink } from "./assets/data";
import acpc from "./assets/acpc-logo.jpg";
const Home = () => {
  return (
    <section className="bg-gray-200 text-center p-5 w-full h-auto">
      <h2 className="text-5xl">ABES Engineering College</h2>
      <h2 className="text-4xl m-2">Master of Computer Application</h2>

      <h3 className="font-bold text-red-600 mb-8 text-3xl">
        Problem Solving Test!
      </h3>
      <a
        href={testLink}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mt-5 px-5 py-2.5">
        Start Assessment
      </a>
    </section>
  );
};

export default Home;
