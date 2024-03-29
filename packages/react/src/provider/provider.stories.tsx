import { action } from "@storybook/addon-actions";
import React from "react";
import { theme } from "../themes";
import EnvioProvider from "./provider";

export default {
  title: "Getting Started/Provider",
  component: EnvioProvider,
  parameters: {
    jsx: { skip: 1 },
  },
};

export const ThemeProvider = () => {
  const testLabelId = "test";

  return (
    <>
      <h1>h1. Heading</h1>
      <h2>h2. Heading</h2>
      <h3>h3. Heading</h3>
      <h4>h4. Heading</h4>
      <h5>h5. Heading</h5>
      <h6>h6. Heading</h6>

      <p>Lorem ipsum other castle, arrow to the knee set us up the bomb.</p>

      <button type="button" onClick={action("button-click")}>
        Do Something
      </button>

      <br />
      <br />

      <div>
        <label htmlFor={testLabelId}>
          Test input
          <input
            id={testLabelId}
            name={testLabelId}
            type="text"
            placeholder="Type something..."
          />
        </label>
      </div>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quos
        animi{" "}
        <a
          href="https://www.youtube.com/watch?v=k4uFst6IHHI&t=3s"
          target="_blank"
          rel="noreferrer"
        >
          necessitatibus
        </a>{" "}
        dolore ea. Officia dolor soluta ut possimus non vero sint tenetur illo
        nulla, reiciendis quisquam fugiat. Est, quidem.
      </p>
    </>
  );
};

export const DefaultTheme = () => {
  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
};
