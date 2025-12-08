export default function Join() {
  return (
    <div className="space-y-12 py-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12 space-y-4 border-2 border-blue-200 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Join UNCP ACM</h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Be part of a thriving community of builders, thinkers, and problem-solvers. Fill out the form to get started!
        </p>
        <div className="text-6xl">🚀</div>
      </section>

      {/* Why Join */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Why Join ACM?</h2>
        <div className="grid gap-4 sm:grid-cols-2">\
          {[
            { emoji: "👥", title: "Community", desc: "Connect with peers who share your passion for tech" },
            { emoji: "🎓", title: "Learn", desc: "Access workshops, tutorials, and expert guidance" },
            { emoji: "💼", title: "Career Growth", desc: "Resume help, interviews, internship opportunities" },
            { emoji: "🎯", title: "Projects", desc: "Build real projects and strengthen your portfolio" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-white border-2 border-slate-200 p-5">
              <p className="text-3xl mb-2">{item.emoji}</p>
              <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-3xl bg-white border-2 border-blue-300 p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Join the Chapter</h2>
          <form className="space-y-5 text-sm">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Full Name</label>
              <input
                className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-2.5 focus:border-blue-600 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">UNCP Email</label>
              <input
                className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-2.5 focus:border-blue-600 focus:outline-none transition"
                placeholder="you@bravemail.uncp.edu"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Year/Class</label>
              <select className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-2.5 focus:border-blue-600 focus:outline-none transition">
                <option>Select your year</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Interests</label>
              <textarea
                rows="3"
                className="w-full rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-2.5 focus:border-blue-600 focus:outline-none transition"
                placeholder="AI, web dev, data science, cybersecurity, game dev, design, etc."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              ✅ Join Now
            </button>

            <p className="text-xs text-slate-500 text-center">
              We'll add you to our mailing list and Discord server!
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Common Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { q: "Do I need experience?", a: "No! All levels welcome. We have workshops for beginners." },
            { q: "Is there a membership fee?", a: "Completely free! No fees to join." },
            { q: "When do you meet?", a: "Weekly Tuesdays at 5 PM, plus special events throughout the semester." },
            { q: "How do I stay updated?", a: "Join our Discord or subscribe to our mailing list." },
            { q: "Can I leave if I'm busy?", a: "Absolutely. No commitments—come when you can!" },
            { q: "Who can join?", a: "Any UNCP student, any major. We're 100% inclusive." },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 p-5">
              <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
              <p className="text-sm text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 text-center space-y-4">
        <p className="text-2xl font-bold">Can't wait to meet you!</p>
        <p className="text-slate-300">Questions? Reach out to acm@uncp.edu or find us on Discord.</p>
      </section>
    </div>
  );
}
