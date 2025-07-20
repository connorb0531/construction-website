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
          Offering affordable, high-quality services.
        </p>
        <div className="space-x-4 py-5">
          <Link
            to="/about"
            className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-5 py-3 rounded text-sm"
          >
            Learn More
          </Link>
          <Link
            to="/projects"
            className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded text-sm"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="border border-gray-800 text-gray-800 hover:bg-gray-100 px-5 py-3 rounded text-sm"
          >
            Contact Me
          </Link>         
        </div>
      </section>
    </div>
  );
}

export default HomePage;
