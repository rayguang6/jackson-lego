import React from 'react';
import Image from 'next/image';

interface HeroDarkV3Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  features?: string[];
  usersCount?: string;
}

export const HeroDarkV3: React.FC<HeroDarkV3Props> = ({
  title = "Multipurpose Page Blocks Designed for Maximum Efficiency",
  subtitle = "Skip design frustration and launch your site fast with pre-designed, proven components.",
  ctaText = "GET INSTANT ACCESS",
  badgeText = "Generative Business Intelligence for Team",
  features = ["Build for Speed", "Proven, High Impact Design", "Launch Like A Pro"],
  usersCount = "2,000+"
}) => {
  return (
    <section className="w-full bg-[#0B0F17] py-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#780820] to-[#0A0101] opacity-90" />
      
      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="/images/brand-logo-dark.png"
                alt="YourBrand"
                width={140}
                height={32}
                priority
                className=""
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center bg-[#EF083A]/5 backdrop-blur-sm rounded-[25px] px-4 py-2 mb-8 w-fit border border-white/[0.15]">
              <Image 
                src="/images/ai-icon.svg"
                alt="AI Icon"
                width={21}
                height={20}
                className="mr-2"
              />
              <span className="font-archivo text-base font-medium text-white/90">{badgeText}</span>
            </div>

            {/* Title */}
            <h1 className="font-manrope text-[44px] leading-[1.2] font-normal text-white mb-4">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="font-manrope text-base leading-[1.67] font-normal text-white/70 mb-8">
              {subtitle}
            </p>

            {/* Feature List */}
            <div className="flex gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#C8D71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-manrope text-sm leading-[1.75] text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group font-archivo inline-flex items-center px-6 py-3 bg-[#EF083A] text-white rounded-lg font-bold text-base hover:bg-[#d00733] transition-all duration-300 mb-8 w-fit">
              {ctaText}
              <svg className="ml-2 group-hover:translate-x-1 transition-transform duration-300" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16663 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Users Count */}
            <div className="flex flex-col gap-2">
              <div className="h-8">
                <Image 
                  src="/images/avatar-group.png"
                  alt="Active users"
                  width={200}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="font-manrope text-sm font-medium text-white/50">
                Join 2000+Game-Changers Using YourBrand Today.
              </p>
            </div>
          </div>

          {/* Right Video Thumbnail */}
          <div className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden">
            <div className="relative h-full rounded-[15px] overflow-hidden bg-[#0B0B0B]">
              <Image
                src="/images/video-thumbnail-2.png"
                alt="Video thumbnail"
                fill
                style={{ objectFit: 'cover' }}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 