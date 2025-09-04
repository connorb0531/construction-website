// client/src/pages/HomePage.js
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="font-sans bg-white text-gray-800  flex flex-col">
      <section className="flex flex-col justify-center items-center text-center px-4 min-h-[65vh]">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Affordable, Reliable, Student-Driven
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-6">
          Offering local constructions services based in Boulder, CO.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-row sm:space-x-4 sm:gap-0 py-5 w-full max-w-md">
          <Link
            to="/about"
            className="w-full border border-gray-800 text-gray-800 hover:bg-gray-100 px-2 py-2 sm:px-5 sm:py-3 rounded text-xs sm:text-sm text-center"
          >
            Learn More
          </Link>
          <Link
            to="/projects"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white px-2 py-2 sm:px-5 sm:py-3 rounded text-xs sm:text-sm text-center"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="w-full border border-gray-800 text-gray-800 hover:bg-gray-100 px-2 py-2 sm:px-5 sm:py-3 rounded text-xs sm:text-sm text-center"
          >
            Contact Me
          </Link>
        </div>

      </section>
    </div>
  );
}

export default HomePage;
