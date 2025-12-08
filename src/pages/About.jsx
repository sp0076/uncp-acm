export default function About() {
  return (
    <div className="space-y-12 py-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12 space-y-4 border-2 border-blue-200">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">About UNCP ACM</h1>
        <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
          We\'re a student-led organization dedicated to building a supportive, inclusive community where students of all backgrounds can learn, grow, and thrive in computing.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 p-8 space-y-4">
          <div className="text-5xl">🎯</div>
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            To create a welcoming, collaborative environment where UNCP students can explore computing, develop technical skills, and build meaningful connections with peers who share their passion for technology.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 border-2 border-indigo-200 p-8 space-y-4">
          <div className="text-5xl">✨</div>
          <h2 className="text-2xl font-bold text-slate-900">Our Values</h2>
          <p className="text-slate-700 leading-relaxed">
            Community first, growth-oriented, inclusive, and supportive. We believe in lifting each other up and creating space for everyone to learn, regardless of experience level.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">What We Offer</h2>
          <p className="text-slate-600">From workshops to mentorship, we\'ve got everything to help you grow</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🛠️", title: "Hands-on Workshops", desc: "Learn practical skills from web dev to data science and AI" },
            { emoji: "🤝", title: "Community Support", desc: "Weekly study nights and project collaboration sessions" },
            { emoji: "📋", title: "Career Help", desc: "Resume review, interview prep, and job search guidance" },
            { emoji: "💡", title: "Project Space", desc: "Build cool projects and add them to your portfolio" },
            { emoji: "👥", title: "Mentorship", desc: "One-on-one guidance from experienced members" },
            { emoji: "🎉", title: "Networking", desc: "Connect with professionals and peers in tech" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-white border-2 border-slate-200 p-5 hover:shadow-lg hover:border-blue-300 transition">
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Can Join */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-12 space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Who Can Join?</h2>
        <p className="text-lg text-slate-200 leading-relaxed mb-6">
          <b>EVERYONE!</b> You don\'t need to be a CS major, and you don\'t need prior coding experience. If you\'re curious about technology, want to build cool things, or are exploring career options in tech—this is the place for you.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-3 pt-4">
          {[
            "🎓 All majors welcome",
            "🌱 Beginners encouraged",
            "🚀 No experience needed",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-slate-100">
              <span className="text-2xl">{item.split(" ")[0]}</span>
              <span>{item.split(" ").slice(1).join(" ")}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
