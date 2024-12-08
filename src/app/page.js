'use client'
import Nav from 'react-bootstrap/Nav';
import '../app/globals.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeroCardWeb from '@/components/Breadcrumb';
import ServiceSection from '@/components/ServiceSection';
import AboutSection from '@/components/AboutSection';
import BusinessDomains from '@/components/BusinessDomains';
import CTASection from '@/components/CTASection';
import ServiceSection2 from '@/components/ServiceSection2';
import DevelopmentProcess from '@/components/DevelopmentProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceBlock from '@/components/ServiceBlock';

function Home() {
  return (
    <>
      <Header />
      <HeroCardWeb />
      <ServiceSection />
      <AboutSection />
      <BusinessDomains />
      <CTASection />
      <ServiceSection2 />
      <DevelopmentProcess />
      <WhyChooseUs />
      <ServiceBlock />
      <Footer />
    </>
  );
}

export default Home;