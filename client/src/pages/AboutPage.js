// client/src/pages/AboutPage.js
import React from "react";

function AboutPage() {
  return (
    <div className="font-sans text-gray-800 mt-10">

      {/* Page header */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2">About This Business</h1>
        <p className="text-lg text-gray-600">
          My personal journey as an aspiring civil engineer.
        </p>
      </section>

      {/* About content */}
      <section className="max-w-3xl mx-auto p-8 mb-12">
        <p className="mb-8">
          Hi, I'm Tyler Buckley — a civil engineering student with hands-on experience in design, construction, and project management. 
        </p>
        <p className="mb-8">
          This isn't a traditional construction company. It's a platform for me to gain real-world experience, build my portfolio, and apply what I've learned in school — while providing affordable, high-quality services to individuals and small businesses.
        </p>
        <p className="mb-8">
          Because this venture is focused on learning and growth, my services are priced fairly and delivered with care, precision, and a commitment to doing a great job. If you're looking for **student-driven, budget-friendly help with your project**, let’s talk.
        </p>
        <p>
          Thank you for supporting a student who's passionate about construction and ready to help build something great!
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
