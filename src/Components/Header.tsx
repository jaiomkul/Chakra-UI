import { Box, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box pb="112px" as="section">
      <Box
        bg="#6B46C1"
        color="#F7FAFC"
        pt="90px"
        pb="198px"
        px="32px"
        textAlign={["left", "left", "center"]}
      >
        <Heading fontWeight="800" fontSize={["3xl", "3xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize={["lg", "lg", "2xl"]}>
          Plans that are carefully crafted to suit you business.
        </Text>
      </Box>
    </Box>
  );
};
