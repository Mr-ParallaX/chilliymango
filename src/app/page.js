import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid';
import Reels from '@/components/Reels';
import ArtOfTheEye from '@/components/ArtOfTheEye';
import PromoTiles from '@/components/PromoTiles';
import PactSection from '@/components/PactSection';
import PressBanner from '@/components/PressBanner';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><ProductGrid /></FadeIn>
      <FadeIn><CategoryGrid /></FadeIn>
      <FadeIn><Reels /></FadeIn>
      <FadeIn><ArtOfTheEye /></FadeIn>
      <FadeIn><PromoTiles /></FadeIn>
      <FadeIn><PactSection /></FadeIn>
      <FadeIn><PressBanner /></FadeIn>
    </>
  );
}
