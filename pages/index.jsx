import HeadTags from "@/components/HeadTags";
import HeroSection from "@/components/hero-slider/HeroSection";
import HomeAbout from "@/components/HomeAbout";
import HomeContact from "@/components/HomeContact";
import HomeServices from "@/components/HomeServices";

export default function Home() {
  return (
    <>
      <HeadTags
        title="Optimum Response Care | Supported Living UK"
        desc="Optimum Response Care is a leading provider of supported living services in the UK. We offer a range of support to adults with learning disabilities, autism, mental health conditions, and physical disabilities. Our services are designed to help people live independently and achieve their full potential."
      />
      <main className="homepage">
        <HeroSection />
        <HomeAbout />
        <HomeServices />
        <HomeContact />
      </main>
    </>
  );
}
