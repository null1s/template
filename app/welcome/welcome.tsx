export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 h-screen justify-center">
        <div className="max-w-[500px] text-center w-full space-y-6 px-4">
          <h1 className="text-4xl font-semibold">Template App</h1>
          <p className="text-zinc-400">
            ReactRouter + Vite + TypeScript + TailwindCSS
          </p>
        </div>
      </div>
    </main>
  );
}
