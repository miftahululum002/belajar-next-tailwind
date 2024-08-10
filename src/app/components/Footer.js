import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="bg-dark pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-4xl text-white mb-5">CodoProID</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>codopro.id@gmail.com</p>
            <p>Jl. Panglima Sudirman Desa Codo Kec. Wajak</p>
            <p>Malang</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">
              Kategori Tulisan
            </h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Programming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Teknologi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Gaya Hidup
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Tentang Saya
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#client"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Klien
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block text-base hover:text-primary mb-3"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <SocialMedia />
          </div>
          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
            <a
              href="https://miftahululum002.github.io"
              target="_blank"
              className="text-bold text-primary"
            >
              Miftahul Ulum
            </a>
            , menggunakan {""}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="font-bold text-sky-500"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
