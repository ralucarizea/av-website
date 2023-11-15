// components/CustomIcon.js
import { createIcon } from "@chakra-ui/react";

const CustomIcon = createIcon({
  displayName: "CustomIcon",
  viewBox: "0 0 80 60", // Set the viewBox based on your SVG dimensions
  path: (
    <svg width="80" height="60" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H26.6625V60H0V0Z"
        fill="#00319C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.6626 0H53.3376V60H26.6626V0Z"
        fill="#FFDE00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.3374 0H79.9999V60H53.3374V0Z"
        fill="#DE2110"
      />
    </svg>
  ),
});

export default CustomIcon;
