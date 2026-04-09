import Image from "next/image";

const navLinks = ["Mac", "iPhone", "iPad", "iWatch", "Support"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 w-full">
      {/* Apple logo */}
      <div className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" width="28" height="28" fill="white">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.9 0 663.4 0 541.8 0 341.2 133.4 234 262.4 234c66.3 0 121.7 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
        </svg>
      </div>

      {/* Nav links */}
      <ul className="flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`text-sm transition-colors ${
                link === "iWatch"
                  ? "bg-white text-gray-800 px-5 py-2 rounded-full font-medium"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 text-white">
        <button aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z" />
          </svg>
        </button>
        <div className="w-px h-5 bg-white/40" />
        <button aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
