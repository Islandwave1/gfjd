export default function Home() {
  return (
    <div className="min-h-screen bg-white text-center">
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <img src="/logo.png" alt="IslandWave Logo" className="h-10" />
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/plans" className="hover:underline">Plans</a>
          <a href="/community" className="hover:underline">Community</a>
          <a href="/market" className="hover:underline">Market</a>
          <a href="/live" className="hover:underline">Live</a>
        </nav>
      </header>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to IslandWave</h1>
        <p className="mb-4">Affordable Internet Services Across Canada</p>
        <iframe className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=@Islandwavenet" frameBorder="0" allowFullScreen></iframe>
      </main>
    </div>
  )
}