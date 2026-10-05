import About from "@/components/About";
import Accommodation from "@/components/Accommodation";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Laundry from "@/components/Laundry";
import Navbar from "@/components/Navbar";
import Transport from "@/components/Transport";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Transport />
        <Accommodation />
        <Laundry />
        <About />
        <CallToAction />
      </main>
    </>
  );
}
