import { createIcon } from "@chakra-ui/react";

// export const createDynamicIcon = (svgContent) => {
//     // Extract width and height attributes from the SVG content
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(svgContent, 'image/svg+xml');
//     const svgElement = doc.firstChild;
//     const width = svgElement.getAttribute('width') || '24'; // Default width if not present
//     const height = svgElement.getAttribute('height') || '24'; // Default height if not present
  
//     return createIcon({
//       displayName: `DynamicIcon${width}`,
//       viewBox: `0 0 ${width} ${height}`,
//       path: (
//         <svg
//           width={width}
//           height={height}
//           xmlns="http://www.w3.org/2000/svg"
//           dangerouslySetInnerHTML={{ __html: svgContent }}
//         />
//       ),
//     });
//   };
  