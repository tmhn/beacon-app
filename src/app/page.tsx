import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureCards from "@/components/FeatureCards";
import DeepFeature from "@/components/DeepFeature";
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
      <DeepFeature />
      <AudienceSplit />
      <CtaBanner />
      <Footer />
    </main>
  );
}
