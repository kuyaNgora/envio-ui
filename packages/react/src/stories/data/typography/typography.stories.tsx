import React from "react";
import {
  Anchor,
  Display,
  DisplayScale,
  Heading,
  HeadingScale,
  LabelText,
  LabelTextScale,
  Stack,
  Text,
  TextScale,
} from "../../../components";

export default {
  title: "Components/Data & Display/Typography",
};

const displayScales: DisplayScale[] = ["lg", "md", "sm", "xs"];
const headingScales: HeadingScale[] = ["lg", "md", "sm", "xs"];
const textScales: TextScale[] = ["lg", "md", "sm", "xs"];
const labelScales: LabelTextScale[] = ["lg", "md", "sm", "xs"];

export const BrandFonts = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    <Text display="block" scale={"lg"} fontFamily="brand" fontWeight={300}>
      Inter Light
    </Text>
    <Text display="block" scale={"lg"} fontFamily="brand" fontWeight={400}>
      Inter Regular
    </Text>
    <Text display="block" scale={"lg"} fontFamily="brand" fontWeight={500}>
      Inter Medium
    </Text>
    <Text display="block" scale={"lg"} fontFamily="brand" fontWeight={600}>
      Inter SemiBold
    </Text>
    <Text display="block" scale={"lg"} fontFamily="brand" fontWeight={700}>
      Inter Bold
    </Text>
  </Stack>
);

export const DisplayScales = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    {displayScales.map(scale => (
      <Display scale={scale}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Display>
    ))}
  </Stack>
);

export const HeadingScales = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    {headingScales.map(scale => (
      <Heading scale={scale}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Heading>
    ))}
  </Stack>
);

export const TextScales = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    {textScales.map(scale => (
      <Text display="block" scale={scale}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    ))}
  </Stack>
);

export const LabelScales = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    {labelScales.map(scale => (
      <LabelText scale={scale} textTransform={"uppercase"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </LabelText>
    ))}
  </Stack>
);

export const AnchorScales = () => (
  <Stack spacing="md" p="md" backgroundColor="greylight02">
    {textScales.map(scale => (
      <Anchor
        display="block"
        scale={scale}
        href="https://envio.co.id"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lorem Ipsum
      </Anchor>
    ))}
  </Stack>
);
