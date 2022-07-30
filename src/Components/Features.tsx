import { HStack, Icon, StackProps, Text, Box, Stack } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  HasselFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "./Icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}
export const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="24px">
      <Icon as={icon} boxSize="48px"></Icon>
      <Text textAlign="left" fontSize="18px" fontWeight="700">
        {children}
      </Text>
    </HStack>
  );
};

export const Features = () => {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8" as="section">
      <Stack
        px="12"
        direction={["column", "column", "row"]}
        spacing={["6", "6", "5"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HasselFreeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};
