import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhavesh Adtani",
    jobTitle: "Full Stack Developer",
    url: "/",
    sameAs: [
      "https://github.com/bhaveshadtani",
      "https://www.linkedin.com/in/bhavesh-adtani/",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </div>
  );
};

export default Index;