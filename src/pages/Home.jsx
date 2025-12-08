import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <div className="text-6xl mb-4">💻</div>
            <p className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Welcome to UNCP ACM
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Build Skills,
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Build Community
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join a welcoming space where UNCP students explore computing, collaborate on projects, and grow their tech careers together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              🚀 Join the Chapter
            </Link>

            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              📅 View Events
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What We Offer</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to grow as a developer and professional</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "👥",
              title: "Community",
              description: "Connect with like-minded students passionate about tech and computing",
              color: "from-blue-50 to-blue-100",
              path: "/about"
            },
            {
              icon: "🎓",
              title: "Workshops",
              description: "Learn practical skills through hands-on workshops and coding sessions",
              color: "from-indigo-50 to-indigo-100",
              path: "/events"
            },
            {
              icon: "💼",
              title: "Career Growth",
              description: "Get resume help, interview prep, and career path guidance from mentors",
              color: "from-purple-50 to-purple-100",
              path: "/about"
            },
            {
              icon: "🛠️",
              title: "Projects",
              description: "Build real-world projects and add them to your portfolio",
              color: "from-pink-50 to-pink-100",
              path: "/about"
            },
            {
              icon: "🤝",
              title: "Mentorship",
              description: "Get one-on-one guidance from experienced students and professionals",
              color: "from-orange-50 to-orange-100",
              path: "/about"
            },
            {
              icon: "🎉",
              title: "Social Events",
              description: "Network and have fun at our regular meetups and celebrations",
              color: "from-green-50 to-green-100",
              path: "/events"
            },
          ].map((feature, idx) => (
            <Link
              key={idx}
              to={feature.path}
              className={`rounded-2xl bg-gradient-to-br ${feature.color} border-2 border-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition cursor-pointer`}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-4 sm:grid-cols-3 py-8 px-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
        {[
          { number: "50+", label: "Active Members" },
          { number: "12+", label: "Events/Semester" },
          { number: "100%", label: "Welcoming" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <p className="text-4xl sm:text-5xl font-black text-white">{stat.number}</p>
            <p className="text-blue-100 text-sm font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-center text-white space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join?</h2>
        <p className="text-slate-300 max-w-xl mx-auto">No experience necessary. Whether you\'re a beginner or experienced developer, there\'s a place for you here.</p>
        <Link
          to="/join"
          className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
