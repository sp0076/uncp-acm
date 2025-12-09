const officers = [
  {
    role: "President",
    name: "Shruti Pallissery",
    focus: "Vision & leadership",
  },
  {
    role: "Vice President",
    name: "Prabina Shrestha",
    focus: "Event coordination",
  },
  {
    role: "Treasurer",
    name: "Student Name",
    focus: "Budget & logistics",
  },
  {
    role: "Secretary",
    name: "Student Name",
    focus: "Communication",
  },
  {
    role: "Events Coordinator",
    name: "Student Name",
    focus: "Workshop planning",
  },
];

export default function Officers() {
  return (
    <div className="space-y-6">
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">Officers</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Our officers are dedicated to building a supportive, inclusive, and
          tech-curious environment for all members.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {officers.map((officer) => (
          <div
            key={officer.role}
            className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm"
          >
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {officer.role}
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              {officer.name}
            </p>

            <p className="mt-1 text-xs text-slate-500">Focus: {officer.focus}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
