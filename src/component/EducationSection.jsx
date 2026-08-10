import { GraduationCap, MapPin, CalendarRange } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    school: "Kashi Institute of Technology, Varanasi",
    affiliation: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2023 - 2027",
    CGPA: "7.48",
    location: "Varanasi, India",
    description:
      "Focused on Artificial Intelligence, Machine Learning, and software engineering.",
  },
  {
    degree: "12th Grade (Senior Secondary)",
    school: "Allahabad Public School, Prayagraj",
    affiliation: "Central Board of Secondary Education (CBSE)",
    period: "2023",
    location: "Prayagraj, India",
  },
  {
    degree: "10th Grade (High School)",
    school: "Army Public School, Prayagraj",
    affiliation: "Central Board of Secondary Education (CBSE)",
    period: "2021",
    location: "Prayagraj, India",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-slate-900 py-24 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/50 bg-violet-500/10 text-violet-200">
            <GraduationCap size={18} />
          </span>
          <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-violet-200/80">
            Education
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-10 h-full w-0.5 rounded-xl bg-linear-to-b from-violet-500 via-fuchsia-500 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${index % 2 === 0 ? "md:[&>*:first-child]:order-1 md:[&>*:last-child]:order-2" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"}`}
              >
                <div
                  className={`${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/60 bg-violet-500/10 text-violet-200 shadow-lg shadow-violet-500/20 md:absolute md:left-1/2 md:translate-x-[-50%] md:top-2">
                    <span className="text-lg">{index + 1}</span>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-800/80 p-6 shadow-xl shadow-slate-950/20 md:ml-0">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-200/90">
                      {item.period} || {item.location}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="mt-3 text-lg text-slate-200">{item.school}</p>
                    <p className="mt-3 text-sm text-slate-200">
                      Affiliation:{" "}
                      <span className="text-sm font-semibold text-slate-400">
                        {item.affiliation}
                      </span>
                    </p>
                    <p className="mt-3 text-sm text-slate-200">
                      CGPA:{" "}
                      <span className="text-sm font-semibold text-slate-400">
                        {item.CGPA || "N/A"}
                      </span>
                    </p>
                    <p className="mt-4 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
