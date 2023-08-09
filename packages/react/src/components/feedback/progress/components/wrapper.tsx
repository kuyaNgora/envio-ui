import React from "react";
import ProgressRoot from "./root";
import { useComponentStyles } from "../../../../system";
import ProgressIndicator from "./indicator";

type ProgressSize = "sm" | "md" | "lg";

export interface ProgressProps {
  className?: string;
  style?: React.CSSProperties;
  value: number;
  size?: ProgressSize;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, style, value, size = "lg" }, ref) => {
    const [progress, setProgress] = React.useState(0);

    const styles = useComponentStyles("progressRoot", {
      size: typeof size === "string" ? size : undefined,
    });

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(value), 500);
      return () => clearTimeout(timer);
    }, [value]);

    return (
      <ProgressRoot
        value={progress}
        sx={styles}
        className={className}
        style={style}
        ref={ref}
      >
        <ProgressIndicator
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressRoot>
    );
  }
);

export default Progress;
