import Image from "next/image";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="w-full py-8 flex flex-col items-center gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-200 mt-2">take a rest</h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mt-2 text-center max-w-xl">
          Welcome to our short video community where everyone can come, watch, enjoy, and take a break comfortably.
        </p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        <section className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center gap-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Take a moment to relax with short videos.<br />
            A space where your mind can find peace, join us at <span className="font-bold text-blue-500 dark:text-blue-200">take a rest</span>.
          </p>
        </section>
      </main>
      <footer className="w-full py-6 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div>
        <div>© 2025 take a rest. All rights reserved.</div>
      </footer>
      <ChatWidget />
    </div>
  );
}
