import Link from "next/link";
import { institutes } from "./menuData";

export default function Programs() {
  return (
    <main className="scroll-smooth">
      {/* Навигационное меню */}
      <nav className="bg-blue-50 px-6 py-4">
        <div className="flex flex-wrap gap-3 justify-center max-w-screen-xl mx-auto">
          {institutes.map((institute, instituteIdx) => (
            <a key={instituteIdx} href={`#institute-${institute.institute_number}`}>
              <button
                className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors text-sm font-medium whitespace-nowrap"
              >
                {institute.institute_name}
              </button>
            </a>
          ))}
        </div>
      </nav>

      {/* Контентные секции */}
      <section className="container mx-auto px-6 py-12">
        {institutes.map((institute, instituteIdx) => {
          const instituteDelayBase = instituteIdx * 0.5;

          return (
            <div
              key={instituteIdx}
              id={`institute-${instituteIdx}`}
              className="mb-16 scroll-mt-28"
            >
              <h2
                className="text-4xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in-up text-center"
                style={{ animationDelay: `${instituteDelayBase}s` }}
              >
                {institute.institute_name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {institute.programs.map((program, idx) => (
                  <Link
                    key={idx}
                    href={"/studying/" + institute.institute_number + "-" + String(idx)}
                    className="program-card block bg-white rounded-xl shadow-md overflow-hidden opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${instituteDelayBase + 0.1 * (idx + 1)}s`,
                    }}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                        {program.program_name}
                      </h3>
                      <ul className="text-gray-600 text-left">
                        <li><p>• Направление: {program.profession_number} «{program.profession_name}»</p></li>
                        <li><p>• Кафедра: {program.department_number} «{program.profession_name}»</p></li>
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
