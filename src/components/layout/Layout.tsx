import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollRestoration } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-how-parchment text-how-ink selection:bg-how-green selection:text-how-parchment">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
