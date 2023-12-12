// DOESNT WORK FOR THE MOMENT

// import axios from 'axios';

// async function fetchCloudinaryImages() {
//   try {
//     const cloudinaryFolder = 'personalGallery'; // Replace with your folder name
//     const response = await axios.get(`https://res.cloudinary.com/dd82hyvds/image/list/${cloudinaryFolder}.json`);

//     if (response.data && response.data.resources) {
//         const images = response.data.resources.map((resource) => ({
//             secure_url: resource.secure_url,
//             alt: `Image carousel number ${resource.public_id}`,
//           }));
    
//           // Divide the images into left and right halves
//           const midpoint = Math.ceil(images.length / 2);
//           const leftHalf = images.slice(0, midpoint);
//           const rightHalf = images.slice(midpoint);
    
//           return { leftHalf, rightHalf };
//     }
//   } catch (error) {
//     console.error('Error fetching Cloudinary images:', error);
//     return { leftHalf: [], rightHalf: [] };
//   }
// }

// export default fetchCloudinaryImages;