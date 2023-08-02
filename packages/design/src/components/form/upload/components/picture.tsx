import  React from "react";
import { IconUploadOutline } from "@envio-ui/icons";
import { useComponentStyles } from "../../../../system";
import UnstyledButtonUpload from "./button";

export interface PictureProps {
  className?: string;
  style?: React.CSSProperties;
  onChange?: (e: any) => void;
  type?: string;
}

const Picture = React.forwardRef<HTMLInputElement, PictureProps>(
  ({ className, style, onChange,  type }, ref) => {
    const refspod = React.useRef<HTMLInputElement>(null);

    const sx = useComponentStyles("picture");

    return (
      <div className={className} style={style} ref={ref}>
        <input
          ref={refspod}
          type="file"
          style={{ display: "none" }}
          multiple={true}
          accept={type}
          onChange={onChange}
        />
        <UnstyledButtonUpload sx={sx} onClick={() => refspod?.current?.click()}>
          <IconUploadOutline size={25} fill="currentColor" />
          <div className="uploader__text">Upload</div>
        </UnstyledButtonUpload>
      </div>

    );
  }
);

export default Picture;
