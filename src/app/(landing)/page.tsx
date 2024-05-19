import Footer from "./_components/footer";
import Heroes from "./_components/heroes";
import LandingContent from "./_components/landing-content";
import Navbar from "./_components/navbar";

const LandingPage = () => {
  return (
    <div className="bg-background min-h-full  flex flex-col">
      <Navbar />
      <Heroes />
      <LandingContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
