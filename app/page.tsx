import Hero from './components/landingpage/Hero';
import Footer from './components/Footer';
import SectionTwo from './components/landingpage/SectionTwo';
import CallToAction from './components/landingpage/CallToAction';
import FAQ from './components/landingpage/FAQ';
import SectionThree from './components/landingpage/SectionThree';
import SocialProof from './components/landingpage/SocialProof';
import Plans from './components/landingpage/Plans';
import RecentWorks from './components/landingpage/RecentWorks';

export default async function Home() {
  return (
    <main className='grid grid-cols-8 bg-white dark:bg-black text-black'>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SocialProof />
      <FAQ />
      <Plans />
      {/* <RecentWorks /> */}
      <CallToAction />
      <Footer />
    </main>
  )
}
