import { Button } from "@chakra-ui/react";
import React from "react";

export default function SidebarButton({ text, color, textTransform = "uppercase" }) {
  return (
    <Button
      fontFamily={"sans"}
      variant="unstyled"
      sx={{
        span: {
          paddingBottom: "5px",
          letterSpacing: "0.25px",
          fontSize: "13.5px",
          //   paddingRight: "15px",
          textTransform: `${textTransform}`,
          position: "relative",
          _after: {
            content: '""',
            position: "absolute",
            width: "100%",
            transform: "scaleX(0)",
            height: "0.5px",
            bottom: "0",
            left: "0",
            backgroundColor: `${color}`,
            transformOrigin: "bottom right",
            transition: "transform 0.35s ease-out",
          },
        },

        "&:hover": {
          span: {
            // fontStyle: "italic",
            color: `${color}`,
            _after: {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
          },
        },
      }}
    >
      <span>{text}</span>
    </Button>
  );
}
