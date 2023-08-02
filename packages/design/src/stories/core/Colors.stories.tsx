import React from "react";
import { theme } from "../../themes";
import { ColorSwatch, ColorSwatchGrid } from "../../utils/storybook";

export default {
  title: "Core/Colors",
  parameters: {
    controls: {
      disabled: true,
    },
  },
  tags: ["autodocs"],
};

export const Blue = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      title="Heart of Ice"
      colorKey="blue01"
      hex={theme.colors.blue01}
    />
    <ColorSwatch title="Maritime" colorKey="blue02" hex={theme.colors.blue02} />
    <ColorSwatch
      title="Pastel Blue"
      colorKey="blue03"
      hex={theme.colors.blue03}
    />
    <ColorSwatch
      title="Adrift on the Nile"
      colorKey="blue04"
      hex={theme.colors.blue04}
    />
    <ColorSwatch
      title="High Seas"
      colorKey="blue05"
      hex={theme.colors.blue05}
    />
    <ColorSwatch title="Blue Bay" colorKey="blue06" hex={theme.colors.blue06} />
    <ColorSwatch
      title="Canadian Tuxedo"
      colorKey="blue07"
      hex={theme.colors.blue07}
    />
    <ColorSwatch title="Mykonos" colorKey="blue08" hex={theme.colors.blue08} />
    <ColorSwatch
      title="French Blue"
      colorKey="blue09"
      hex={theme.colors.blue09}
    />
    <ColorSwatch
      title="Sea Paint"
      colorKey="blue10"
      hex={theme.colors.blue10}
    />
  </ColorSwatchGrid>
);

export const Grey = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      title="White"
      colorKey="greylight01"
      hex={theme.colors.greylight01}
      hasBorder
    />
    <ColorSwatch
      title="Ghost"
      colorKey="greylight02"
      hex={theme.colors.greylight02}
      hasBorder
    />
    <ColorSwatch
      title="Isabeline"
      colorKey="greylight03"
      hex={theme.colors.greylight03}
    />
    <ColorSwatch
      title="Gainsboro"
      colorKey="greylight04"
      hex={theme.colors.greylight04}
    />
    <ColorSwatch
      title="Ash Grey"
      colorKey="greylight05"
      hex={theme.colors.greylight05}
    />
    <ColorSwatch
      title="Crayola"
      colorKey="greymed01"
      hex={theme.colors.greymed01}
    />
    <ColorSwatch
      title="Cadet"
      colorKey="greymed02"
      hex={theme.colors.greymed02}
    />
    <ColorSwatch
      title="Light state"
      colorKey="greymed03"
      hex={theme.colors.greymed03}
    />
    <ColorSwatch
      title="Slate"
      colorKey="greymed04"
      hex={theme.colors.greymed04}
    />
    <ColorSwatch
      title="Electric"
      colorKey="greymed05"
      hex={theme.colors.greymed05}
    />
    <ColorSwatch
      title="Charcoal"
      colorKey="greydark01"
      hex={theme.colors.greydark01}
    />
    <ColorSwatch
      title="Gunmetal"
      colorKey="greydark02"
      hex={theme.colors.greydark02}
    />
    <ColorSwatch
      title="Raisin"
      colorKey="greydark03"
      hex={theme.colors.greydark03}
    />
    <ColorSwatch
      title="Rich black"
      colorKey="greydark04"
      hex={theme.colors.greydark04}
    />
    <ColorSwatch
      title="Lead"
      colorKey="greydark05"
      hex={theme.colors.greydark05}
    />
  </ColorSwatchGrid>
);

export const Green = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      title="Vanishing Point"
      colorKey="green01"
      hex={theme.colors.green01}
    />
    <ColorSwatch
      title="Delta Mint"
      colorKey="green02"
      hex={theme.colors.green02}
    />
    <ColorSwatch
      title="Celadon"
      colorKey="green03"
      hex={theme.colors.green03}
    />
    <ColorSwatch
      title="Grape Green"
      colorKey="green04"
      hex={theme.colors.green04}
    />
    <ColorSwatch title="Leek" colorKey="green05" hex={theme.colors.green05} />
    <ColorSwatch
      title="Emerald Rain"
      colorKey="green06"
      hex={theme.colors.green06}
    />
    <ColorSwatch title="Mantis" colorKey="green07" hex={theme.colors.green07} />
    <ColorSwatch
      title="Leapfrog"
      colorKey="green08"
      hex={theme.colors.green08}
    />
    <ColorSwatch
      title="Matt Green"
      colorKey="green09"
      hex={theme.colors.green09}
    />
    <ColorSwatch
      title="Freesia"
      colorKey="green10"
      hex={theme.colors.green10}
    />
  </ColorSwatchGrid>
);

export const Orange = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      title="Blossom"
      colorKey="orange01"
      hex={theme.colors.orange01}
    />
    <ColorSwatch
      title="Coral Kiss"
      colorKey="orange02"
      hex={theme.colors.orange02}
    />
    <ColorSwatch
      title="Apricot"
      colorKey="orange03"
      hex={theme.colors.orange03}
    />
    <ColorSwatch
      title="Pastel Orange"
      colorKey="orange04"
      hex={theme.colors.orange04}
    />
    <ColorSwatch
      title="Goose Bill"
      colorKey="orange05"
      hex={theme.colors.orange05}
    />
    <ColorSwatch
      title="Jambalaya"
      colorKey="orange06"
      hex={theme.colors.orange06}
    />
    <ColorSwatch
      title="Bittersweet"
      colorKey="orange07"
      hex={theme.colors.orange07}
    />
    <ColorSwatch
      title="Indian Saffron"
      colorKey="orange08"
      hex={theme.colors.orange08}
    />
    <ColorSwatch
      title="Dark Orange"
      colorKey="orange09"
      hex={theme.colors.orange09}
    />
    <ColorSwatch
      title="Pumpkin Cat"
      colorKey="orange10"
      hex={theme.colors.orange10}
    />
  </ColorSwatchGrid>
);

export const Red = () => (
  <ColorSwatchGrid>
    <ColorSwatch title="We Peep" colorKey="red01" hex={theme.colors.red01} />
    <ColorSwatch
      title="Rose Quartz"
      colorKey="red02"
      hex={theme.colors.red02}
    />
    <ColorSwatch title="Peach Bud" colorKey="red03" hex={theme.colors.red03} />
    <ColorSwatch title="Young Crab" colorKey="red04" hex={theme.colors.red04} />
    <ColorSwatch
      title="Vinaceous Cinnamon"
      colorKey="red05"
      hex={theme.colors.red05}
    />
    <ColorSwatch
      title="Salmon Poké Bowl"
      colorKey="red06"
      hex={theme.colors.red06}
    />
    <ColorSwatch
      title="Lovely Little Rosy"
      colorKey="red07"
      hex={theme.colors.red07}
    />
    <ColorSwatch
      title="Blossoming Dynasty"
      colorKey="red08"
      hex={theme.colors.red08}
    />
    <ColorSwatch
      title="Chef's Kiss"
      colorKey="red09"
      hex={theme.colors.red09}
    />
    <ColorSwatch title="Hot Jazz" colorKey="red10" hex={theme.colors.red10} />
  </ColorSwatchGrid>
);

export const Yellow = () => (
  <ColorSwatchGrid>
    <ColorSwatch
      title="Glamour White"
      colorKey="yellow01"
      hex={theme.colors.yellow01}
    />
    <ColorSwatch
      title="Hint of Yellow"
      colorKey="yellow02"
      hex={theme.colors.yellow02}
    />
    <ColorSwatch
      title="Colonial White"
      colorKey="yellow03"
      hex={theme.colors.yellow03}
    />
    <ColorSwatch
      title="Bleached Sunflower"
      colorKey="yellow04"
      hex={theme.colors.yellow04}
    />
    <ColorSwatch
      title="Banana Republic"
      colorKey="yellow05"
      hex={theme.colors.yellow05}
    />
    <ColorSwatch
      title="Pasta Luego"
      colorKey="yellow06"
      hex={theme.colors.yellow06}
    />
    <ColorSwatch
      title="Lighthouse Glow"
      colorKey="yellow07"
      hex={theme.colors.yellow07}
    />
    <ColorSwatch
      title="Tuscan Sun"
      colorKey="yellow08"
      hex={theme.colors.yellow08}
    />
    <ColorSwatch
      title="Dream of Spring"
      colorKey="yellow09"
      hex={theme.colors.yellow09}
    />
    <ColorSwatch
      title="Golden Frame"
      colorKey="yellow10"
      hex={theme.colors.yellow10}
    />
  </ColorSwatchGrid>
);
