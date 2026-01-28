import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Test Application
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A modern Next.js application ready to be deployed on GitHub Pages.
          This is a simple, clean starter template that you can customize for
          your needs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Fast & Modern
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Built with Next.js 16 and React 18 for optimal performance and
            developer experience.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Responsive Design
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Styled with Tailwind CSS for a beautiful, responsive design that
            works on all devices.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
            Easy Deployment
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Ready to deploy to GitHub Pages with automated CI/CD workflows.
          </p>
        </div>
      </section>
    </div>
  );
}
