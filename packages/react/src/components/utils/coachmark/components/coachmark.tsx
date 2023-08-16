import React from "react";
import ReactDOM from "react-dom";
import {
  ChevronRightOutline,
  ChevronLeftOutline,
  CheckOutline,
} from "@envio-ui/icons";
import {
  CoachCoreProps,
  Dimension,
  debounce,
  dimensionSetter,
  toolTipPlacementCalculator,
} from "../utils";
import { useComponentStyles } from "../../../../system";
import { Box, Stack } from "../../../layout";
import { Button } from "../../../inputs";

const CoachMarkCore: React.FC<CoachCoreProps> = ({
  activate,
  element,
  tooltip,
  component,
}) => {
  const [dimension, setDimension] = React.useState<Dimension | null>(null);

  const baseStyles = useComponentStyles("coachbase");
  const tipStyles = useComponentStyles("coachtip");

  React.useEffect(() => {
    if (!(activate && element)) return;
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
    dimensionSetter({ element, setDimension });
    // eslint-disable-next-line func-names
    const scrollEvent = function () {
      debounce(dimensionSetter, 300)({ element, setDimension });
    };
    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("resize", scrollEvent);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("scroll", scrollEvent);
      window.removeEventListener("resize", scrollEvent);
    };
    // eslint-disable-next-line
  }, [activate, element]);

  if (!dimension || !activate || !element) {
    if (dimension && activate && !element) {
      console.error("Ref is not passed properly @Coach-Mark");
    }
    return null;
  }

  const base = (
    <div
      style={{
        ...baseStyles,
        top: dimension.topSpace,
        left: dimension.leftSpace,
        height: dimension.height + 10,
        width: dimension.width + 10,
      }}
    />
  );

  const tip = (
    <Box
      className={`coachmark__${tooltip.position}`}
      sx={tipStyles}
      style={{
        ...toolTipPlacementCalculator({
          dimension,
          position: tooltip.position,
        }),
      }}
    >
      {component}

      <Stack
        direction="horizontal"
        justifyContent="space-between"
        mt="sm"
        alignItems="center"
      >
        {tooltip?.footer && tooltip?.footer?.length && (
          <Box>
            <Stack direction="horizontal" spacing="xxs" alignItems="center">
              {[...Array(tooltip?.footer?.length)].map((_, _i) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${tooltip?.footer?.index}-${_i}`}
                  style={{
                    height: 10,
                    width: 10,
                    background:
                      _i + 1 === tooltip?.footer?.index
                        ? "var(--nvo-primary)"
                        : "var(--nvo-gray-300)",
                    borderRadius: 10,
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
        <Box>
          <Stack
            direction="horizontal"
            spacing="xxs"
            alignItems="center"
            justifyContent="flex-end"
          >
            {tooltip?.footer?.index !== 1 && (
              <Button
                icon={ChevronLeftOutline}
                onClick={tooltip?.prev}
                iconSize={18}
                variant="outline-primary"
                size="sm"
                style={{ height: "1.5rem", width: "1.5rem" }}
                borderRadius="1.5rem"
              />
            )}

            {tooltip?.footer?.index !== tooltip?.footer?.length ? (
              <Button
                icon={ChevronRightOutline}
                onClick={tooltip?.next}
                iconSize={18}
                variant="outline-primary"
                size="sm"
                style={{ height: "1.5rem", width: "1.5rem" }}
                borderRadius="1.5rem"
              />
            ) : (
              <Button
                icon={CheckOutline}
                onClick={tooltip?.next}
                iconSize={18}
                variant="primary"
                size="sm"
                style={{ height: "1.5rem", width: "1.5rem" }}
                borderRadius="1.5rem"
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      {ReactDOM.createPortal(base, document.body)}
      {ReactDOM.createPortal(tip, document.body)}
    </>
  );
};

export default CoachMarkCore;
