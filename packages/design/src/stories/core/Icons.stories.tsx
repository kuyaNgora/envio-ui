import React from "react";
import { IconMap } from "../../utils/storybook";
import { IconDetail, IconGrid } from "../../utils/storybook/Icons";

export default {
  title: "Core/Icons",
  tags: ["autodocs"],
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

export const editing = () => (
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

export const document = () => (
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

export const medical = () => (
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

export const menu = () => (
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

export const person = () => (
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

export const security = () => (
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

export const shapes = () => (
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

export const social = () => (
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
