import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "./Icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px"></Icon>
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 10px 10px -5px #0000000A, 0px 20px 25px -5px #0000001A;
"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#652CD3" p="60px">
            <Text fontWeight="800" fontSize="24px">
              Premium Pro
            </Text>
            <Heading
              fontWeight="800"
              fontSize={["5xl", "5xl", "6xl"]}
              mt="16px"
            >
              $329
            </Heading>
            <Text fontWeight="500" fontSize="18px" mt="8px">
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              w="282px"
              mt="24px"
              fontWeight="700"
              fontSize="16px"
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
