import React from "react";
import { IconMap } from "../../../utils/storybook";
import { IconDetail, IconGrid } from "../../../utils/storybook/Icons";

export default {
  title: "Components/Data & Display/Icons",
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Alert = () => (
  <>
    <IconGrid name="">
      {IconMap.alert.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.alert.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Arrow = () => (
  <>
    <IconGrid name="">
      {IconMap.arrow.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.arrow.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Bussiness = () => (
  <>
    <IconGrid name="">
      {IconMap.bussiness.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.bussiness.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Coding = () => (
  <>
    <IconGrid name="">
      {IconMap.coding.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.coding.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const MediaCommunication = () => (
  <>
    <IconGrid name="">
      {IconMap.communication.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <IconGrid name="">
      {IconMap.communication.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Editing = () => (
  <>
    <IconGrid name="">
      {IconMap.editing.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.editing.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Document = () => (
  <>
    <IconGrid name="">
      {IconMap.document.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.document.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Medical = () => (
  <>
    <IconGrid name="">
      {IconMap.medical.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.medical.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Menu = () => (
  <>
    <IconGrid name="">
      {IconMap.menu.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.menu.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Person = () => (
  <>
    <IconGrid name="">
      {IconMap.person.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.person.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Security = () => (
  <>
    <IconGrid name="">
      {IconMap.security.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.security.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Shapes = () => (
  <>
    <IconGrid name="">
      {IconMap.shapes.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.shapes.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);

export const Social = () => (
  <>
    <IconGrid name="">
      {IconMap.social.outline.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>

    <IconGrid name="">
      {IconMap.social.fill.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </>
);
