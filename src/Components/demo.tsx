import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
export const Demo = () => {
  return (
    <div className="App">
      <Heading as="i" fontSize="100px">
        Chakra UI
      </Heading>
      <Flex>
        <Box bg="green" w="200px" h="200px">
          This Is Box
        </Box>
        <Box as="section" bg="red" w="300px" h="300px">
          hi
        </Box>
        <Box bg="green" w="200px" h="200px">
          This Is Box
        </Box>
        <Box as="section" bg="red" w="300px" h="300px">
          hi
        </Box>
      </Flex>

      <Stack spacing="24px" direction="row">
        <Box bg="green" w="200px" h="200px">
          This Is Box
        </Box>
        <Box as="section" bg="red" w="300px" h="300px">
          hi
        </Box>
        <Box bg="green" w="200px" h="200px">
          This Is Box
        </Box>
        <Box as="section" bg="red" w="300px" h="300px">
          hi
        </Box>
      </Stack>

      <Text noOfLines={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </div>
  );
};
