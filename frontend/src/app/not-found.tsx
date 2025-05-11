import { FaTools } from 'react-icons/fa';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center px-6 py-16">
      <div className="bg-white rounded-xl shadow-md p-10 text-center max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <FaTools className="text-blue-600 text-4xl" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Страница не найдена</h1>
        <Link href="/">
          <span className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            Вернуться на главную
          </span>
        </Link>
      </div>
    </div>
  );
}
