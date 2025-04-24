import React from 'react';
import { OfferProps, defaultOfferProps } from './types';
import { Badge } from '@/components/template-ui/Badge';
import { MyHeading } from '@/components/template-ui/MyHeading';
import { MyParagraph } from '@/components/template-ui/MyParagraph';
import { TEMPLATE_IMAGES } from '@/lib/constants/imagePaths';
import Image from 'next/image';
import { PrimaryButton } from '@/components/template-ui/PrimaryButton';
export const OfferV3: React.FC<OfferProps> = ({
  badgeText = defaultOfferProps.badgeText,  
  title = defaultOfferProps.title, 
  subtitle = defaultOfferProps.subtitle, 
  theme = defaultOfferProps.theme,
  offers = defaultOfferProps.offers,
  specialOfferTitle = defaultOfferProps.specialOfferTitle,
  specialOfferSubtitle = defaultOfferProps.specialOfferSubtitle,
  specialOfferPrice = defaultOfferProps.specialOfferPrice,
  specialOfferOriginalPrice = defaultOfferProps.specialOfferOriginalPrice,
  ctaText = defaultOfferProps.ctaText,
}) => {

  const isDark = theme === 'dark';
  
  // The benefit lists from the Figma design
  const benefitLists = {
    modularSystem: [
      "Lifetime access to [#] video lessons",
      "Downloadable workbooks and resources",
      "Access to a private community of students"
    ],
    exclusiveBonuses: [
      "Resource Library Access",
      "Priority Access to New Features and Updates",
      "Personalized Funnel Optimization Tips"
    ]
  };
  
  return (
    <section className={`w-full py-24 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-10">
          <Badge theme={theme}>
            {badgeText}
          </Badge>
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            {title && (
              <MyHeading as='h2' className={`text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </MyHeading>
            )}
            {subtitle && (
              <MyParagraph theme={theme} className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </MyParagraph>
            )}
          </div>
          
          {/* Main Content Area */}
          <div className="w-full gap-8 mt-8 flex flex-col items-center justify-center">
            {/* Devices Image - 2 columns */}
            <div className="">
              <div className="w-full flex justify-center items-center">
                <Image 
                  src={TEMPLATE_IMAGES.OFFER.BUNDLE_IMAGE} 
                  alt="Responsive Devices" 
                  className="z-1"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            
            {/* Offer Card - 3 columns */}

            <div className={`w-full max-w-xl -mt-30 pt-30 py-5 rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} border border-gray-200`}>
              <div className="flex flex-col items-center justify-center">
                {/* Two Feature Columns */}
                <div className="flex flex-col justify-start">
                  {/* Column 1 */}
                  <div>
                    <MyHeading as='h3' theme={theme} className="text-2xl font-semibold mb-7">The Proven Modular System</MyHeading>
                    <ul className="space-y-2">
                      {benefitLists.modularSystem.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 mr-3 text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                            </svg>
                          </span>
                          <MyParagraph theme={theme} className="text-lg font-medium">{benefit}</MyParagraph>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Column 2 */}
                  <div className='mt-10'>
                    <MyHeading as='h3' theme={theme} className="text-2xl font-semibold mb-7 ">Exclusive Bonuses</MyHeading>
                    <ul className="space-y-2">
                      {benefitLists.exclusiveBonuses.map((bonus, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 mr-3 text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z" />
                            </svg>
                          </span>
                          <MyParagraph theme={theme} className="text-lg font-medium">{bonus}</MyParagraph>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Pricing Section */}
                <div className="mt-14 text-center">
                  <MyHeading as='h3' theme={theme} className="text-2xl font-medium">
                    {specialOfferTitle}
                  </MyHeading>
                  <MyParagraph theme={theme} className="uppercase tracking-[0.24em] mt-2.5 font-bold text-lg text-gray-500">
                    {specialOfferSubtitle}
                  </MyParagraph>
                  <div className="mt-2.5">
                    <div className="text-6xl md:text-7xl font-extrabold text-red-600 leading-tight">{specialOfferPrice}</div>
                    <div className="text-3xl mt-1 text-gray-400">
                        <s>{specialOfferOriginalPrice}</s>
                    </div>
                  </div>
                  
                  {/* CTA Button */}

                  <PrimaryButton theme={theme} className="mt-8">{ctaText}</PrimaryButton>
                  
                  {/* Rating */}
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <Image src={TEMPLATE_IMAGES.OFFER.RATING_IMAGE} alt="Rating" width={100} height={100} />
                    <MyParagraph theme={theme} className="text-sm font-medium">Rated 4.9/5 by 100's of verified students</MyParagraph>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}; 