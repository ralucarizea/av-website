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
  
//scopul acestei functii este sa preia ca parametru un fisier de tip svg, sa extraga automat valorile atributelor width si height ale tagului <svg>, dupa care sa genereze automat 
// o componenta noua de tip Icon nou folosind functia createIcon si inserand valorile extrase initial, adaugand de asemenea pe pozitia atributului path: (...) intregul svg insusi
// problema intampinata: numele fiecarui Icon trb sa fie unul unic si sa fie extras astfel incat sa poata fi folosit ulterior. Cum ? Nush