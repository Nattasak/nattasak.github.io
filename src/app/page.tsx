export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-950 to-black font-inter text-gray-200">
      <main className="flex flex-col items-center text-center w-full max-w-7xl bg-gray-900 shadow-2xl shadow-fuchsia-500/30 rounded-xl pt-4 pb-4 pl-8 pr-8 mt-8 mb-8 border border-fuchsia-700 flex-grow">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-cyan-400 tracking-wide">
          n a t
        </h1>
        <p className="text-base sm:text-lg mb-8 max-w-2xl text-gray-300">
          where creativity meets the joy of building
        </p>

        <section className="w-full text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <a
              href="https://nattasak.github.io/dev-daily-prompt/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg shadow-md shadow-purple-700/50 hover:shadow-lg hover:shadow-purple-600/60 transition-all duration-300 border border-purple-700 cursor-pointer group
                         bg-gradient-to-br from-purple-900 to-indigo-900 hover:from-purple-800 hover:to-indigo-800"
            >
              <h3 className="text-base font-semibold mb-1 text-purple-200 group-hover:text-cyan-300 transition-colors duration-300">Dev Daily Prompt</h3>
              <p className="text-sm text-purple-300 mb-2 leading-tight">
                A project providing daily development prompts to spark creativity and practice coding skills.
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
