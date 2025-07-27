import {
  Header,
  Hero,
  About,
  Projects,
  Expertise,
  LargeText,
  Contact,
  Footer,
  ScrollToTop,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <LargeText />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
