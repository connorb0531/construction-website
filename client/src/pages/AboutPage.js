// client/src/pages/AboutPage.js
import React from "react";

function AboutPage() {
  return (
    <div className="font-sans text-gray-800 mt-12">

      {/* Page header */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">About This Business</h1>
        <p className="text-lg text-gray-600">
          My personal journey as an aspiring civil engineer.
        </p>
      </section>

      {/* About content */}
      <section className="max-w-3xl mx-auto pt-16">
        <img 
          src="/img/portrait.png" 
          alt="Portrait"
          className="float-right mb-4 w-24 sm:w-32 md:w-40 lg:w-48 rounded-xl shadow-md ml-10"
        />

        <p className="mb-6">
          Hi, I'm Tyler Buckley, a civil engineering student at the University of Boulder with hands-on experience in construction management.
        </p>
        <p className="mb-6">
          This isn't a traditional construction company. It's a platform for me to gain real-world experience, build my portfolio, and apply what I've learned in school and internships, while providing affordable, high-quality services to individuals and small businesses.
        </p>
        <p className="mb-6">
          Because this venture is focused on learning and growth, my services are priced fairly and delivered with care, precision, and a commitment to doing a great job. If you're looking for student-driven, budget-friendly help with your project, let’s talk.
        </p>
        <p>
          Thank you for supporting a student who's passionate about construction and ready to help build something great!
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
