// {Object.keys(locales).map((language) => (
//     <Box key={language} bg="red">
//       {" "}
//       <Button
//         bg="#fff"
//         height="fit-content"
//         p="0px"
//         m="2px"
//         style={{
//           fontWeight:
//             i18n.resolvedLanguage === language ? "bold" : "normal",
//           fontSize: "12px",
//         }}
//         type="submit"
//         onClick={() => i18n.changeLanguage(language)}
//       >
//         {/* <Image src={"./assets/images/RO.png"} width="20px" height="15px" mr="4px" /> */}
//         {locales[language]?.title}
//       </Button>
//     </Box>
//   ))}
//   <Heading>{t("main.header")}</Heading>