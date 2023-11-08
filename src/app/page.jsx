import { Navbar, Footer, About, Institute } from "./components";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Institute />
      <Footer />
    </main>
  );
}
