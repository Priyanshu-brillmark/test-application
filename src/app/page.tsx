export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Next.js Test Application
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Next.js 14</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built with the latest Next.js framework featuring App Router
            </p>
          </div>

          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">TypeScript</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fully typed application for better developer experience
            </p>
          </div>

          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Tailwind CSS</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Modern utility-first CSS framework for styling
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get started by editing{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              src/app/page.tsx
            </code>
          </p>
        </div>
      </div>
    </main>
  );
}
