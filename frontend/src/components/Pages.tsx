"use client";

import Link from "next/link";
import { FaBook, FaExternalLinkAlt, FaQuestion, FaLaptopCode } from "react-icons/fa";

export default function HomePages() {
  const sections = [
    {
      title: "Учебное",
      description: "Файлы, ресурсы и сведения по предметам в рамках программ подготовок.",
      icon: <FaBook className="text-blue-600 text-2xl" />,
      bgColor: "bg-blue-100",
      delay: "0.1s",
      href: "/studying",
    },
    {
      title: "Сервисы и ленты",
      description: "Ссылки на сервисы и информационные ресурсы МАИ и других организаций.",
      icon: <FaExternalLinkAlt className="text-green-600 text-2xl" />,
      bgColor: "bg-green-100",
      delay: "0.2s",
      href: "/something",
    },
    {
      title: "Справочники",
      description: "Справочная информация на студенческие темы от разработчика платформы.",
      icon: <FaQuestion className="text-yellow-600 text-2xl" />,
      bgColor: "bg-yellow-100",
      delay: "0.3s",
      href: "/manuals",
    },
    {
      title: "Проект и интересное",
      description: "Блог разработчика платформы, студенческие моменты и вклады людей в проект.",
      icon: <FaLaptopCode className="text-purple-600 text-2xl" />,
      bgColor: "bg-purple-100",
      delay: "0.4s",
      href: "/project",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Разделы</h2>
        <div className="w-32 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, idx) => (
          <Link
            key={idx}
            href={section.href}
            className="section-card block bg-white rounded-xl shadow-md overflow-hidden opacity-0 animate-fade-in-up"
            style={{ animationDelay: section.delay }}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className={`icon-bg ${section.bgColor}`}>
                  {section.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{section.title}</h3>
              <p className="text-gray-600 text-center">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
