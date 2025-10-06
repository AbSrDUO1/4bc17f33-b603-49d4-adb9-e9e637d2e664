"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple brand="Xeven Solutions" links={['#hero', '#about', '#how-to-buy', '#tokenomics', '#footer']} />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero title="Welcome to Xeven Solutions" description="Innovative solutions for your needs." tagLabel="Cutting Edge" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="Xeven Solutions delivers impactful and innovative SaaS solutions tailored to your business needs. Our focus is on providing clear value and a seamless user experience that stands out in today’s competitive market." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics title="Key Metrics" description="Understanding our token economic model helps you gauge the value of our project." tokenData={[{ value: '1M', description: 'Total Supply' }, { value: '75%', description: 'Staked' }, { value: '10%', description: 'Burn Rate' }]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis logoSrc="/images/logo.svg" logoAlt="Xeven Solutions Logo" logoText="Xeven Solutions" columns={[{ items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }, { label: 'How to Buy', onClick: () => {} }, { label: 'Tokenomics', onClick: () => {} }] }, { items: [{ label: 'Contact', onClick: () => {} }, { label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] }, { items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Blog', onClick: () => {} }, { label: 'Support', onClick: () => {} }] }]} />
      </div>
    </SiteThemeProvider>
  );
}