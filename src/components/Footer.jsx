export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-blue-100">ABOUT UNCP ACM</h3>
          <p className="text-xs text-blue-200 leading-relaxed">
            A student-led organization dedicated to fostering a community of builders, thinkers, and problem-solvers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-blue-100">QUICK LINKS</h3>
          <ul className="text-xs text-blue-200 space-y-1">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/events" className="hover:text-white transition">Events</a></li>
            <li><a href="/officers" className="hover:text-white transition">Officers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-blue-100">CONTACT</h3>
          <p className="text-xs text-blue-200">
            📧 acm@uncp.edu
            <br />
            📍 UNC Pembroke, NC
          </p>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-blue-100">FOLLOW US</h3>
          <div className="flex gap-3">
            <a href="#" className="text-lg hover:text-blue-300 transition" title="Discord">💬</a>
            <a href="#" className="text-lg hover:text-blue-300 transition" title="GitHub">🐙</a>
            <a href="#" className="text-lg hover:text-blue-300 transition" title="Instagram">📸</a>
            <a href="#" className="text-lg hover:text-blue-300 transition" title="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700 px-4 py-4 text-center text-xs text-blue-300">
        <p>© {new Date().getFullYear()} UNCP ACM Chapter • UNC Pembroke • Built with React + Vite + Tailwind CSS</p>
      </div>
    </footer>
  );
}
