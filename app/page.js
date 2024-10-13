export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Fasalniti</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1">
        <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Under Development</h2>
          <p className="mb-4">
            We are currently working on our website. Stay tuned for something
            amazing!
          </p>
          <p>Follow us on:</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-blue-500 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2024 Fasalniti. All rights reserved.</p>
      </footer>
    </div>
  );
}
