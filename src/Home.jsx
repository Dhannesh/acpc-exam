import { testLink } from "./assets/data";
import bg from "./assets/assessment_back.png";
const Home = () => {
  return (
    <section className="bg-gray-200 text-center p-1 w-full h-auto">
      <h2 className="text-4xl m-1">Department of Computer Science</h2>

      <h3 className="font-bold text-red-600 mb-8 text-3xl">
        Problem Solving Class Test
      </h3>
      <a
        href={testLink}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mt-3 px-5 py-2.5">
        Start Assessment
      </a>
      <center>
        <img
          src={bg}
          className="rounded-md shadow-sm mt-5"
          style={{ width: 500 }}
        />
      </center>
    </section>
  );
};

export default Home;
