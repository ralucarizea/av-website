import React from "react";
import { Button, keyframes } from "@chakra-ui/react";
const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 200% 0; }
  100% { background-position: 0 0; }
`;

export default function StyledButton({ text, width, height, bgColor, color }) {
  return (
    <Button
      fontSize="inherit"
      py={[3, 4, 5]}
      px={[2, 3, 5, 6]}
      w={width}
      h={height}
      sx={{
        // padding: '0.9em 1.6em',
        // border: '1px solid',
        outline: "none",
        color: `${color}`,
        fontFamily: "inherit",
        fontWeight: "500",
        cursor: "pointer",
        position: "relative",
        zIndex: "0",
        borderRadius: "30px",
        _after: {
          content: '""',
          zIndex: "-1",
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: `${bgColor}`,
          left: "0",
          top: "0",
          borderRadius: "28px",
        },
        _before: {
          content: '""',
          bgImage: `linear-gradient(45deg, ${"accents.army"}, ${"accents.yellow"}, ${"accents.red"}, ${"accents.lime"}, ${"tints.red"}, ${"tints.lime"}, ${"tints.yellow"}, ${"accents.red"})`,
          position: "absolute",
          top: "-2px",
          left: "-2px",
          bgSize: "600%",
          zIndex: "-1",
          width: "calc(100% + 4px)",
          height: "calc(100% + 4px)",
          filter: "blur(8px)",
          animation: `${glowing} 20s linear infinite`,
          transition: "opacity .3s ease-in-out",
          borderRadius: "28px",
          opacity: "0",
        },
        _hover: {
          _before: {
            opacity: "1",
          },
        },
        _active: {
          webkitTextFillColor: "transparent",
          color: `${bgColor}`,
          fontWeight: "bold",
          border: "none",
          _after: {
            bg: `${color}`,
          },
        },
      }}
    >
      {text}
    </Button>

    // <Button
    //   fontFamily={"sans"}
    //   my={{ base: 3, sm: 5, md: 8 }}
    //   fontSize="inherit"
    //   borderRadius="28px"
    //   bg={"accents.army"}
    //   color={"tints.lime"}
    //   boxShadow="0 0 25px rgb(0,140,255)"
    //   _hover={{
    //     backgroundColor: "tints.red",
    //     color: "accents.red",
    //     borderColor: "transparent",
    //     boxShadow: `0 0 5px rgb(0,140,255),0 0 25px rgb(0,140,255),0 0 50px rgb(0,140,255), 0 0 100px rgb(0,140,255)`,

    //   }}
    // >
    //   {text}
    // </Button>

    // <Button
    // sx={{
    //   border: 'none',
    //   outline: 'none',
    //   fontFamily:"inherit",
    //   color: 'neutrals.light',
    //   bg: 'neutrals.dark',
    //   cursor: 'pointer',
    //   position: 'relative',
    //   zIndex: '0',
    //   borderRadius: '28px',
    //   _before: {
    //     content: '""',
    //     bgImage: `linear-gradient(100deg, ${"accents.red"}, ${"tints.red"}, ${"accents.lime"}, ${"tints.lime"},${"accents.yellow"})`,
    //     position: 'absolute',
    //     top: '-2px',
    //     left: '-2px',
    //     bgSize: '400%',
    //     zIndex: '-1',
    //     filter: 'blur(7px)',
    //     width: 'calc(100% + 5px)',
    //     height: 'calc(100% + 5px)',
    //     animation: `${glowing} 15s linear infinite`,
    //     opacity: '0',
    //     transition: 'opacity .3s ease-in-out',
    //     borderRadius: '28px',
    //   },
    //   _hover: {
    //     _before: {
    //       opacity: '1',
    //     },
    //   },
    //   _active: {
    //     color: 'neutrals.dark',
    //     _after: {
    //       bg: 'transparent',
    //     },
    //   },
    //   _after: {
    //     zIndex: '-1',
    //     content: '""',
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     bg: 'neutrals.dark',
    //     left: '0',
    //     top: '0',
    //     borderRadius: '28px',
    //   },
    // }}
    // >{text}</Button>
  );
}
