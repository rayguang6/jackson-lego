// 'use client';

// import React from 'react';
// import { Section, SectionType } from '@/lib/types';

// interface WireframeSectionProps {
//   section: Section;
//   onClick: (sectionId: string) => void;
//   isSelected: boolean;
// }

// const WireframeSection: React.FC<WireframeSectionProps> = ({
//   section,
//   onClick,
//   isSelected,
// }) => {


//   // Generate placeholder content based on section type
//   const renderContent = () => {
//         return (
//           <div className="flex flex-col items-center justify-center h-full">
//             <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
//             <div className="h-5 w-3/4 bg-gray-300 rounded mt-4"></div>
//           </div>
//         );
//   };

//   return (
//     <div
//       className={`border-2 rounded-md overflow-hidden transition-all ${
//         isSelected ? 'border-blue-500' : 'border-gray-200'
//       }  mb-4 cursor-pointer`}
//       onClick={() => onClick(section.id)}
//     >
//       <div className="p-2 bg-gray-100 border-b flex justify-between items-center">
//         <span className="text-xs font-medium">{section.title}</span>
//         <span className="text-xs text-gray-500">{section.type}</span>
//       </div>
//       <div className="bg-white w-full p-1">{renderContent()}</div>
//     </div>
//   );
// };

// export default WireframeSection; 