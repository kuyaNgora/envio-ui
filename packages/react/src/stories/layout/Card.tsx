import React from "react";
import { Anchor, Box, Card, Heading, Stack, Text } from "../../components";
import { SystemBlock } from "../../utils/storybook";

export default {
  // title: "Components/Layout/Card",
  component: Card,
  // tags: ["autodocs"],
};

interface ExampleGridProps {
  children?: React.ReactNode;
}

const ExampleGrid: React.FC<ExampleGridProps> = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export const CardExample = () => (
  <Card
    elevation={2}
    display="flex"
    flexDirection="column"
    m="lg"
    width="100%"
    maxWidth={365}
  >
    <img
      alt="Sweet Trip - Velocity:Design:Comfort. album art"
      src="https://f4.bcbits.com/img/a0341989491_10.jpg"
      style={{
        height: 356,
        objectFit: "cover",
        width: "100%",
      }}
    />
    <Box p="sm" py="md" flex="1 1 auto">
      <Box mb="sm">
        <Heading scale={"md"} m={0}>
          Velocity:Design:Comfort.
        </Heading>
        <Text as="p" scale={"md"} fontWeight={400} m={0}>
          Sweet Trip &middot; 2003
        </Text>
      </Box>
      <Stack spacing="sm">
        <Text>
          Reiciendis facere hic modi inventore fugiat laboriosam, maiores omnis
          molestiae sequi. Adipisci doloremque cum ea distinctio officiis ab rem
          quo sint non.
        </Text>
      </Stack>
      <Box mt="sm">
        <Text as="p" scale={"md"} fontWeight={400} m={0}>
          <strong>Rating:</strong> 9/10
        </Text>
      </Box>
    </Box>
  </Card>
);

export const Example1 = () => (
  <SystemBlock
    title="Composability"
    subtitle="Cards provide a base building block for composing UI patterns with other foundational components (e.g. Box and Text)."
    noBackground
  >
    <ExampleGrid>
      <Anchor
        display="flex"
        flexDirection="column"
        href="https://sweettrip.bandcamp.com/album/velocity-design-comfort"
        target="_blank"
      >
        <Card display="flex" flex={1} flexDirection="column" elevation={2}>
          <img
            alt="Sweet Trip - Velocity:Design:Comfort. album art"
            src="https://f4.bcbits.com/img/a0341989491_10.jpg"
            style={{
              height: 356,
              objectFit: "cover",
              width: "100%",
            }}
          />
          <Box padding="xs" flex="1 1 auto">
            <Box mb="sm">
              <Heading scale={"md"} m={0}>
                Velocity:Design:Comfort.
              </Heading>
              <Text as="p" scale={"md"} fontWeight={400} m={0}>
                Sweet Trip &middot; 2003
              </Text>
            </Box>
            <Stack spacing="sm">
              <Text>
                Reiciendis facere hic modi inventore fugiat laboriosam, maiores
                omnis molestiae sequi. Adipisci doloremque cum ea distinctio
                officiis ab rem quo sint non.
              </Text>
            </Stack>
          </Box>
        </Card>
      </Anchor>
      <Anchor
        display="flex"
        flexDirection="column"
        href="https://miraclemusical.bandcamp.com/album/hawaii-part-ii"
        target="_blank"
      >
        <Card display="flex" flex={1} flexDirection="column" elevation={2}>
          <img
            alt="Example"
            src="https://f4.bcbits.com/img/a3955451029_10.jpg"
            style={{
              height: 356,
              objectFit: "cover",
              width: "100%",
            }}
          />
          <Box padding="sm" flex="1 1 auto">
            <Box mb="sm">
              <Heading scale={"md"} m={0}>
                Hawaii: Part II
              </Heading>
              <Text as="p" scale={"md"} fontWeight={400} m={0}>
                ミラクルミュージカル &middot; 2012
              </Text>
            </Box>
            <Stack spacing="sm">
              <Text>
                Dolor earum, reiciendis expedita placeat magnam porro ipsam
                libero. Perspiciatis suscipit optio, ut, cum accusantium,
                facilis quis ipsa est saepe veniam nostrum!
              </Text>
            </Stack>
          </Box>
        </Card>
      </Anchor>
      <Anchor
        display="flex"
        flexDirection="column"
        href="https://software100p.bandcamp.com/album/digital-dance"
        target="_blank"
      >
        <Card display="flex" flex={1} flexDirection="column" elevation={2}>
          <img
            alt="Example"
            src="https://f4.bcbits.com/img/a3380857970_10.jpg"
            style={{
              height: 356,
              objectFit: "cover",
              width: "100%",
            }}
          />
          <Box padding="sm" flex="1 1 auto">
            <Box mb="sm">
              <Heading scale={"md"} m={0}>
                Digital-Dance
              </Heading>
              <Text as="p" scale={"md"} fontWeight={400} m={0}>
                SOFTWARE &middot; 1988
              </Text>
            </Box>
            <Stack spacing="sm">
              <Text>
                Minima hic, corporis soluta mollitia explicabo voluptatibus
                magni minus, dolore culpa deserunt facilis voluptatem alias
                velit maxime atque vero officia tempora animi.
              </Text>
            </Stack>
          </Box>
        </Card>
      </Anchor>
    </ExampleGrid>
  </SystemBlock>
);
