'use client';

import React from 'react';
import { MyHeading, Highlight } from '../template-ui/MyHeading';
import { MyParagraph } from '../template-ui/MyParagraph';
import { GLOBALCSS_VAR } from '@/lib/constants/GlobalCssStyle';

/**
 * Example component showcasing different ways to use MyHeading and MyParagraph
 * This demonstrates the flexibility and customization options
 */
export const TextComponentsExample: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <section>
        <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
        <div className="p-6 border rounded-lg bg-white">
          <MyHeading>Default Heading (h2)</MyHeading>
          <MyParagraph>This is a default paragraph with standard styling.</MyParagraph>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Different Heading Levels</h3>
        <div className="p-6 border rounded-lg bg-white space-y-4">
          <MyHeading as="h1">This is an H1 Heading</MyHeading>
          <MyHeading as="h2">This is an H2 Heading</MyHeading>
          <MyHeading as="h3">This is an H3 Heading</MyHeading>
          <MyHeading as="h4">This is an H4 Heading</MyHeading>
          <MyHeading as="h5">This is an H5 Heading (maps to h4 style)</MyHeading>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Sizes (Overriding Default)</h3>
        <div className="p-6 border rounded-lg bg-white space-y-4">
          <MyHeading as="h2" >H2 Tag with H1 Size</MyHeading>
          <MyHeading as="h1">H1 Tag with H3 Size</MyHeading>
          <MyParagraph as="small">This is smaller paragraph text</MyParagraph>
          <MyParagraph as="xs">This is extra small paragraph text</MyParagraph>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Light & Dark Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-lg bg-white space-y-4">
            <MyHeading theme="light">Light Theme Heading</MyHeading>
            <MyParagraph theme="light">
              Light theme paragraph using global CSS variables.
              These components automatically adapt to the current theme.
            </MyParagraph>
          </div>
          <div className="p-6 border rounded-lg bg-gray-900 space-y-4">
            <MyHeading theme="dark">Dark Theme Heading</MyHeading>
            <MyParagraph theme="dark">
              Dark theme paragraph using global CSS variables.
              Notice how text colors change based on the theme.
            </MyParagraph>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Custom Styling</h3>
        <div className="p-6 border rounded-lg bg-white space-y-4">
          <MyHeading 
            textAlign="center" 
            color="blue"
          >
            Centered Blue Heading
          </MyHeading>
          
          <MyHeading 
            weight="regular" 
            lineHeight="loose"
          >
            Heading with Regular Weight and Loose Line Height
          </MyHeading>
          
          <MyParagraph 
            textAlign="right" 
            weight="semibold"
          >
            Right-aligned semibold paragraph.
          </MyParagraph>
          
          <MyParagraph 
            color={GLOBALCSS_VAR.primaryColor}
            lineHeight="tight"
          >
            Primary color text with tight line height using GLOBALCSS_VAR.
          </MyParagraph>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">With Highlights</h3>
        <div className="p-6 border rounded-lg bg-white space-y-4">
          <MyHeading>
            Heading with <Highlight>Highlighted</Highlight> Text
          </MyHeading>
          <MyParagraph>
            Paragraph with <span style={{ color: GLOBALCSS_VAR.accentColor, fontWeight: GLOBALCSS_VAR.fontWeightSemibold }}>
              custom styling using global variables
            </span> inline.
          </MyParagraph>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Mobile Responsive Example</h3>
        <div className="p-6 border rounded-lg bg-white space-y-4">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:w-1/2">
              <MyHeading>
                Responsive <Highlight>Layout</Highlight>
              </MyHeading>
              <MyParagraph>
                This section changes layout on different screen sizes. On mobile, these elements stack vertically,
                but on larger screens they display side-by-side.
              </MyParagraph>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="bg-gray-100 p-4 rounded-lg">
                <MyHeading as="h3" size="h4" textAlign="center">
                  Secondary Content
                </MyHeading>
                <MyParagraph size="small" textAlign="center">
                  This is additional content that demonstrates responsive behavior.
                </MyParagraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 