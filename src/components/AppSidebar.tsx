import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Heart,
  BookOpen,
  Building2,
  CalendarDays,
  FileText,
  Menu,
  X,
  BookMarked,
} from "lucide-react";
import { useState } from "react";
import { weeks } from "@/data/weeks";
import logo from "@/assets/ezidea-logo.png";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Introduction", url: "/introduction", icon: BookOpen },
  { title: "Acknowledgements", url: "/acknowledgements", icon: Heart },
  { title: "Organization", url: "/organization", icon: Building2 },
  { title: "Weekly Activities", url: "/weeks", icon: CalendarDays },
  { title: "Technical Report", url: "/technical-report", icon: FileText },
  { title: "References", url: "/references", icon: BookMarked },
  { title: "Conclusion", url: "/conclusions", icon: FileText },
];

export function AppSidebar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (p: string) => path === p;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMenuOpen(false)}>
          <div className="h-10 w-10 rounded-lg bg-gradient-brand p-1.5 flex items-center justify-center shadow-glow">
            <img src={logo} alt="Ezidea" className="h-full w-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-sm font-bold text-white leading-tight">
              Hazitz Iklil
            </div>
            <div className="text-[10px] text-slate-400 leading-tight">
              Industrial Training
            </div>
          </div>
        </Link>

        {/* Main Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-1 flex-nowrap justify-center flex-1">
          {mainItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                isActive(item.url)
                  ? "bg-teal-500/30 text-teal-300 border border-teal-500/50"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50 border border-transparent"
              }`}
            >
              <item.icon size={16} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-700 bg-slate-800/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {mainItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                  isActive(item.url)
                    ? "bg-teal-500/30 text-teal-300 border border-teal-500/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50 border border-transparent"
                }`}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}