export default function EducationSection() {
  const coursework = [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Deep Learning",
    "MERN Stack",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "OOP Concepts"
  ];

  return (
    <section id="education" className="py-20 px-6 bg-[hsl(217,19%,27%)]/20">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-8 border border-[hsl(215,27%,33%)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,84%,60%)]">
                    Bachelor of Technology – Computer Science and Engineering
                  </h3>
                  <p className="text-[hsl(215,13%,65%)]">VIT-AP University</p>
                  <p className="text-[hsl(215,13%,65%)]">Amaravati, Andhra Pradesh</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-lg font-semibold text-[hsl(0,84%,60%)]">CGPA: 9.45</p>
                  <p className="text-[hsl(215,13%,65%)]">2022 – 2026</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Relevant Coursework</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="skill-badge px-3 py-1 rounded-lg text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-8 border border-[hsl(215,27%,33%)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(0,84%,60%)]">
                    Intermediate (MPC)
                  </h3>
                  <p className="text-[hsl(215,13%,65%)]">Narayana Junior College</p>
                  <p className="text-[hsl(215,13%,65%)]">Visakhapatnam, Andhra Pradesh</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-lg font-semibold text-[hsl(0,84%,60%)]">CGPA: 9.53</p>
                  <p className="text-[hsl(215,13%,65%)]">2020 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
