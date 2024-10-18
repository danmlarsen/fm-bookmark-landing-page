import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
