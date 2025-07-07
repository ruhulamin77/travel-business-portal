import HeroSection from '@/components/home/HeroSection';
import LatestArticles from '@/components/home/LatestArticles';
import PopularPackages from '@/components/home/PopularPackages';
import Subscription from '@/components/home/Subscription';
import TravelRecommendations from '@/components/home/TravelRecommendation';
import ValueProps from '@/components/home/ValueProps';
import VideoSection from '@/components/home/VideoSection';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      <HeroSection />
      <PopularPackages />
      <VideoSection />
      <LatestArticles />
      <ValueProps />
      <TravelRecommendations />
      <Subscription />
    </div>
  );
}
