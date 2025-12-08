const upcoming = [
  {
    emoji: "📚",
    title: "Intro to Git & GitHub",
    type: "Workshop",
    date: "Dec 15, 2024",
    time: "3:00 PM",
    location: "Science Building, Room 101",
    description: "A hands-on intro to version control and how to host your projects on GitHub. Perfect for beginners!",
    color: "from-blue-50 to-blue-100",
  },
  {
    emoji: "💻",
    title: "Weekly Study & Project Night",
    type: "Community",
    date: "Every Tuesday",
    time: "5:00 PM - 7:00 PM",
    location: "Student Center, Conference Room",
    description: "Bring homework, projects, or just hang out and learn with others. Low-pressure, collaborative environment.",
    color: "from-indigo-50 to-indigo-100",
  },
  {
    emoji: "🚀",
    title: "Web Dev Bootcamp",
    type: "Workshop",
    date: "Jan 10, 2025",
    time: "2:00 PM",
    location: "Tech Lab",
    description: "Learn HTML, CSS, and JavaScript basics. Build your first website from scratch!",
    color: "from-purple-50 to-purple-100",
  },
  {
    emoji: "🤖",
    title: "AI & Machine Learning Talk",
    type: "Guest Speaker",
    date: "Jan 24, 2025",
    time: "4:00 PM",
    location: "Auditorium",
    description: "Guest speaker from a tech company discusses AI trends and career opportunities in the field.",
    color: "from-pink-50 to-pink-100",
  },
  {
    emoji: "🎉",
    title: "Year-End Celebration & Networking",
    type: "Social",
    date: "Feb 14, 2025",
    time: "6:00 PM",
    location: "Student Center",
    description: "Celebrate our semester with food, games, and opportunities to network with members and guests!",
    color: "from-green-50 to-green-100",
  },
];

export default function Events() {
  return (
    <div className="space-y-12 py-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 sm:p-12 space-y-4 border-2 border-blue-200">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">Upcoming Events</h1>
        <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
          Join us for workshops, study sessions, guest talks, and social events. All events are open to everyone—no experience necessary!
        </p>
      </section>

      {/* Events List */}
      <section className="space-y-4">
        {upcoming.map((e) => (
          <div
            key={e.title}
            className={`rounded-2xl bg-gradient-to-br ${e.color} border-2 border-white p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition`}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl flex-shrink-0">{e.emoji}</div>
              
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/60 text-xs font-bold text-slate-700 uppercase">
                      {e.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{e.title}</h3>
                </div>

                <p className="text-slate-700 text-base leading-relaxed">{e.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-semibold text-slate-700 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <span>{e.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🕐</span>
                    <span>{e.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>{e.location}</span>
                  </div>
                </div>

                <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-2 text-white font-semibold hover:bg-slate-800 transition">
                  ✅ Register Interest
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="space-y-6 pt-8">
        <h2 className="text-3xl font-bold text-slate-900">Event FAQs</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Do I need prior experience?",
              a: "Not at all! All our events are designed for all skill levels. Beginners are especially welcome."
            },
            {
              q: "Is there a fee to attend?",
              a: "No! All ACM events are completely free for UNCP students."
            },
            {
              q: "Can I bring a friend?",
              a: "Absolutely! We love when members bring friends. The more, the merrier!"
            },
            {
              q: "How do I get updates?",
              a: "Join our Discord or email acm@uncp.edu to get all event announcements."
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-white border-2 border-slate-200 p-5">
              <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
              <p className="text-slate-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6 pt-8">
        <h2 className="text-3xl font-bold text-slate-900">What Members Say</h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "The study nights helped me complete my capstone project. Great community!",
              name: "Alex J.",
              role: "Junior, CS Major",
              emoji: "⭐⭐⭐⭐⭐"
            },
            {
              quote: "I was scared of coding but ACM made it fun and approachable. Highly recommend!",
              name: "Jordan M.",
              role: "Sophomore, Business Major",
              emoji: "⭐⭐⭐⭐⭐"
            },
            {
              quote: "The resume workshop got me my first internship. ACM changed my career path!",
              name: "Taylor P.",
              role: "Senior, CS Major",
              emoji: "⭐⭐⭐⭐⭐"
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 p-6">
              <p className="text-sm text-yellow-600 mb-3">{item.emoji}</p>
              <p className="text-slate-700 italic mb-4 leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
