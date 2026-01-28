import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Application",
  description: "A Next.js application ready for GitHub Pages deployment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Test Application
                </Link>
                <div className="flex gap-6">
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">{children}</main>
          <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} Test Application. Built with
                Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
