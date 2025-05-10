import { FaTelegram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Официальные страницы проекта</h1>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://t.me/mai_library" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaTelegram className="text-4xl" />
            </a>
            <a href="https://github.com/iannsgirdye/mai_library" target="_blank" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaGithub className="text-4xl" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p><b>mai_library</b> не является официальным ресурсом Московского авиационного института и несёт ознакомительных характер.</p>
        </div>
      </div>
    </footer>
  );
}
