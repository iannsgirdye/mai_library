'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Учебное', href: '/studying' },
    { name: 'Сервисы и ленты', href: '/something' },
    { name: 'Справочники', href: '/manuals' },
    { name: 'Проект и интересное', href: '/project' },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="hero-gradient text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="min-w-[200px]">
            <Link href="/" className="block">
              <h1 className="text-3xl font-bold">mai_library</h1>
              <p className="text-sm opacity-90">Сборник материалов для маёвца</p>
            </Link>
          </div>

          {/* Бургер */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navItems.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`inline-block px-4 py-2 rounded transition duration-200 ${
                      isActive(href)
                        ? 'bg-white text-blue-600 font-semibold'
                        : 'hover:bg-white/20'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="flex flex-col gap-3">
              {navItems.map(({ name, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`inline-block px-4 py-2 rounded transition ${
                      isActive(href)
                        ? 'bg-white text-blue-600 font-semibold'
                        : 'hover:bg-white/20'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
