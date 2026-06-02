import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import AudienceSplit from "@/components/AudienceSplit";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <FeatureCards />
      <HowItWorks />
      <AudienceSplit />
      <CtaBanner />
      <Footer />
    </main>
  );
}
