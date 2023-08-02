import React from "react";
import { Box, Text } from "../../components/core";

const ElevationDetail: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height={210}
      p="md"
    >
      <Text as="h5" scale={"md"} fontWeight={400} color="greylight05" m={0}>
        {title}
      </Text>
      <Text as="p" scale={"md"} color="greymed01" m={0} mt="xs">
        {description}
      </Text>
    </Box>
  );
};

export default ElevationDetail;
