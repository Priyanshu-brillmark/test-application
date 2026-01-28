export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About This Application
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a Next.js application template designed to be easily
            deployed to GitHub Pages. It demonstrates a clean, modern structure
            with multiple pages and responsive styling.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The application is built with:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
            <li>Next.js 16 - React framework for production</li>
            <li>TypeScript - Type-safe JavaScript</li>
            <li>Tailwind CSS - Utility-first CSS framework</li>
            <li>GitHub Actions - Automated deployment workflow</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            This template provides a solid foundation for building static
            websites that can be hosted on GitHub Pages, making it easy to share
            your projects with the world.
          </p>
        </div>
      </div>
    </div>
  );
}
