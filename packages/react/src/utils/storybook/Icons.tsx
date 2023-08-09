/* eslint-disable import/no-extraneous-dependencies */
import { toClipboard } from "copee";
import React from "react";
import { Box, Card, UnstyledButton, useToast } from "../../components";

interface IconGridProps {
  children?: React.ReactNode;
  name: string;
}

export const IconGrid: React.FC<IconGridProps> = ({ children }) => {
  return (
    <Box
      mt="lg"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 12 - 24px), 1fr))"
      gridGap="10px"
      p="xl"
      backgroundColor="greylight02"
    >
      {children}
    </Box>
  );
};

// TODO: Maybe use Suspense + lazy load these icons by path?
export const IconDetail: React.FC<IconGridProps> = ({ name, children }) => {
  const { addToast } = useToast();

  const copyText = (text: string) => {
    const success = toClipboard(text);

    if (success) {
      addToast({
        status: "success",
        message: `Successfully copied \`${text}\` to clipboard.`,
        dismissible: true,
        dismissAfter: 5000,
      });
    }
  };

  return (
    <UnstyledButton onClick={() => copyText(name)}>
      <Card elevation={1} width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height={71}
          p="sm"
          border="1px solid #ddd"
          borderRadius="8px"
        >
          <Box width={24} height={24}>
            {children}
          </Box>
        </Box>
      </Card>
    </UnstyledButton>
  );
};
