import React from "react";
import { Stack, Uploader } from "../../components";

export default {
  title: "Components/Forms/Uploader",
  component: Uploader,
  tags: ["autodocs"],
};

export const Example = () => {
  const [picture, setPicture] = React.useState<string[]>([]);

  const $handleChange = async (blob: Array<File>) => {
    Array.from(blob).forEach(async function (data) {
      const reader = new FileReader();
      reader?.readAsDataURL(data);

      reader.onload = async function () {
        const payload = {
          image: reader?.result,
        };

        setPicture(p => [...p, payload?.image]);
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
