"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How To Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
          buttonText="Get Barnie"
          onButtonClick={() => { /* handle click */ }}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Barnie Coin!" subtitle="Join the fun of meme culture!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="Barnie Coin is a community-driven cryptocurrency designed to bring joy and memes to the blockchain!" />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy Barnie Coin"
          steps={[
            { title: "Step 1", description: "Create a wallet.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Purchase Barnie Coin.", image: "/images/placeholder2.avif", position: "right", isCenter: false },
            { title: "Step 3", description: "Join our community!", image: "/images/placeholder3.avif", position: "center", isCenter: true },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Learn about the distribution and benefits of Barnie Coin."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Million" },
            { id: 2, title: "Circulating Supply", description: "500 Thousand" },
            { id: 3, title: "Liquidity", description: "50% Allocated" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Barnie Coin Logo"
          logoText="Barnie Coin"
          items={[
            { label: "Privacy Policy", onClick: () => { /* handle privacy policy click */ } },
            { label: "Terms of Service", onClick: () => { /* handle terms click */ } },
            { label: "Contact", onClick: () => { /* handle contact click */ } },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}