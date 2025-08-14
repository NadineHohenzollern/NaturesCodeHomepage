import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-encode antialiased text-green2 bg-black">
        {/* Header mit schwarzem Hintergrund */}
        <header className="bg-black py-4 shadow-md">
          <nav className="container flex items-center justify-between mx-auto h-10">
            <div className="text-xl font-bold text-white flex items-center">Nature&apos;s Code</div>
            <ul className="flex space-x-6 text-lg text-gray-300 items-center">
              <li>
                <a href="/shadebar" className="hover:text-white transition-all duration-500">Shop</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-500">Tools</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-500">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-500">Über uns</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-500">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-all duration-500">Kontakt</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="">{children}</main>

        {/* Footer */}
        <footer className="bg-black text-[#F6FFF8] py-12"> 
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-[#F6FFF8] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green1 transition duration-200">Shop</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Über uns</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">FAQ & Hilfe</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Kontakt</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Mein Konto</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Rücksendungen & Garantie</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-[#F6FFF8] mb-4">Folge uns</h3>
            <div className="flex space-x-4">
              {/* Font Awesome Icons */}
              <a href="#" className="text-[#F6FFF8] hover:text-green1 transition duration-200">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-[#F6FFF8] hover:text-green1 transition duration-200">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-[#F6FFF8] hover:text-green1 transition duration-200">
                <i className="fab fa-pinterest-p text-2xl"></i>
              </a>
              <a href="#" className="text-[#F6FFF8] hover:text-green1 transition duration-200">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#F6FFF8] mb-4">Newsletter</h3>
            <p className="text-green2 mb-4">Verpassen Sie keine Neuigkeiten!</p>
            <form>
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="w-full p-3 rounded-md bg-green4 text-[#F6FFF8] border border-green4 focus:outline-none focus:ring-2 focus:ring-green1"
              />
              <button
                type="submit"
                className="mt-4 w-full py-3 bg-green1 text-costumBlack font-semibold rounded-md hover:bg-green2 transition duration-300"
              >
                Abonnieren
              </button>
            </form>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-[#F6FFF8] mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green1 transition duration-200">Impressum</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Datenschutz</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">AGB</a></li>
              <li><a href="#" className="hover:text-green1 transition duration-200">Versand</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center mt-12 text-green4 text-sm"> {/* green4 for copyright */}
          &copy; {new Date().getFullYear()} Nature&apos;s Code. Alle Rechte vorbehalten.
        </div>
      </footer>
      </body>
    </html>
  );
}