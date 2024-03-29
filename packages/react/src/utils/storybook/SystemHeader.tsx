import * as React from "react";
import { Box, Heading, Text } from "../../components";
import StoryContainer from "./StoryContainer";

export interface SystemHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemHeader: React.FC<SystemHeaderProps> = ({ title, subtitle }) => (
  <Box bg="blue09" px="lg" py="xl" color="white">
    <StoryContainer>
      <Heading
        as="h1"
        scale={"lg"}
        color="white"
        fontFamily="brand"
        fontWeight={500}
        maxWidth={500}
        mb={0}
      >
        {title}
      </Heading>
      {typeof subtitle === "string" ? (
        <Text as="p" mb={0} mt="md" scale={"md"} maxWidth={500}>
          {subtitle}
        </Text>
      ) : (
        subtitle
      )}
    </StoryContainer>
  </Box>
);

SystemHeader.displayName = "SystemHeader";

export default SystemHeader;
