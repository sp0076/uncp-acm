import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/officers", label: "Officers" },
  { to: "/events", label: "Events" },
  { to: "/join", label: "Join" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-sm font-bold text-white shadow-lg group-hover:shadow-xl transition">
            💻
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              UNCP ACM
            </span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
              Computer Science Club
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `pb-1 transition duration-300 border-b-2 ${
                  isActive 
                    ? "border-blue-600 text-blue-600" 
                    : "border-transparent text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-xs font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            Join Now
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border-2 border-slate-300 p-2 hover:bg-slate-100 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-700"></span>
            <span className="block h-0.5 w-5 bg-slate-700"></span>
            <span className="block h-0.5 w-5 bg-slate-700"></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition font-medium ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 text-center text-white font-medium hover:shadow-lg transition mt-2"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
