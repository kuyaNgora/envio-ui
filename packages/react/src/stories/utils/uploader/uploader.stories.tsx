import React from "react";
import { Stack, Uploader } from "../../../components";

export default {
  title: "Components/Utils/Uploader",
  component: Uploader,
  argTypes: {
    className: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    type: {
      table: {
        type: {
          summary: `string`,
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    style: {
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
    },
    onChange: {
      table: {
        type: {
          summary: "() => void",
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
          detail: null,
        },
        defaultValue: { summary: false },
      },
    },
    onRemove: {
      table: {
        type: {
          summary: "(e: number) => void",
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
    data: {
      table: {
        type: {
          summary: "string[]",
          detail: null,
        },
        defaultValue: { summary: null },
      },
    },
  },
};

export const Example = () => {
  const [picture, setPicture] = React.useState<any[]>([]);

  const $handleChange = async (blob: Array<File>) => {
    Array.from(blob).forEach(async function (data) {
      const reader = new FileReader();
      reader?.readAsDataURL(data);

      reader.onload = async function () {
        setPicture(p => [...p, reader?.result]);
      };
    });
  };

  const $handleRemove = async (i: number) => {
    const newImg = [...picture];
    newImg.splice(i, 1);
    setPicture(newImg);
  };

  return (
    <Stack direction="horizontal" spacing="lg">
      <Uploader.Image
        onChange={e => {
          $handleChange(e.target.files);
        }}
        type="image/png, image/jpeg"
      />
      <Uploader.Result data={picture} onRemove={$handleRemove} />
    </Stack>
  );
};
