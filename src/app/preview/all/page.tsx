import { HeroLightV1, HeroDarkV3 } from '@/components/sections/Hero';

export default function AllPreviewPage() {
  return (
    <main className="w-full">
      <div className="p-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">Light Hero Section</h2>
      </div>
      
      <HeroLightV1 
        title="Multipurpose Page Blocks Designed for Maximum Efficiency"
        subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
        eyebrowText="The #1 Community for Game-Changers"
        ctaText="GET INSTANT ACCESS"
      />
      
      <div className="p-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold">Dark Hero Section</h2>
      </div>
      
      <HeroDarkV3 
        title="Multipurpose Page Blocks Designed for Maximum Efficiency"
        subtitle="Skip design frustration and launch your site fast with pre-designed, proven components."
        tagText="Generative Business Intelligence for Team"
        ctaText="GET INSTANT ACCESS"
      />
    </main>
  );
} 