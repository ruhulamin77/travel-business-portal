import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center bg-black text-white p-6 ">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="font-bold text-lg">Travel Business Portal</span>
          <p className="text-gray-400 text-sm">
            Explore the world with us &mdash; Your trusted travel partner.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-400 transition">
            Packages
          </Link>
          <a href="/" className="hover:text-gray-400 transition">
            About
          </a>
          <a href="/" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Travel Business Portal. All rights
        reserved.
      </div>
    </footer>
  );
}
