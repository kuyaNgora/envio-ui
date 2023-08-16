import React from "react";
import { CoachProps, Coachmark, Heading, Text } from "../../../components";

export default {
  title: "Components/Utils/Coachmark",
};

export const Example: React.FC = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const [rerender, setRerender] = React.useState<number>(0);
  const [activatedNumber, setActivateNumber] = React.useState<number>(0);

  React.useEffect(() => {
    /* needed so that ref gets updates value to be passed as prop */
    setRerender(rerender + 1);
  }, [ref1.current]);

  const coachList: Array<CoachProps> = [
    {
      activate: activatedNumber === 0,
      component: (
        <div>
          <Heading scale="xxs">Title</Heading>
          <Text scale="sm">
            Interactive guide through the features a user needs in order to
            activate.
          </Text>
        </div>
      ),
      reference: ref1,
      tooltip: {
        position: "bottom",
        // footer: {
        //   index: 1,
        //   length: 4,
        // },
        next: () => setActivateNumber(activatedNumber + 1),
        prev: () => setActivateNumber(activatedNumber - 1),
      },
    },
    {
      activate: activatedNumber === 1,
      component: <div>I can be long. </div>,
      reference: ref2,
      tooltip: {
        position: "top",
        // footer: {
        //   index: 2,
        //   length: 4,
        // },
        next: () => setActivateNumber(activatedNumber + 1),
        prev: () => setActivateNumber(activatedNumber - 1),
      },
    },
    {
      activate: activatedNumber === 2,
      component: <div>ok big one.</div>,
      reference: ref3,
      tooltip: {
        position: "left",
        // footer: {
        //   index: 3,
        //   length: 4,
        // },
        next: () => setActivateNumber(activatedNumber + 1),
        prev: () => setActivateNumber(activatedNumber - 1),
      },
    },
    {
      activate: activatedNumber === 3,
      component: <div>ok big one.</div>,
      reference: ref4,
      tooltip: {
        position: "right",
        // footer: {
        //   index: 4,
        //   length: 4,
        // },
        next: () => setActivateNumber(activatedNumber + 1),
        prev: () => setActivateNumber(activatedNumber - 1),
      },
    },
  ];

  const coach = coachList[activatedNumber];

  return (
    <>
      <div>
        <h1 ref={ref1}>Coach Mark</h1>
        <p>
          A <b>Lightweight React Coach Mark</b> sample, Awesome!!!.
        </p>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ width: "60%" }} ref={ref4}>
            <h2 ref={ref3}>Contact Us - Demo Page</h2>
            <p ref={ref2}>Notice the position of tooltip, its configurable</p>
          </div>
        </div>
      </div>
      <Coachmark {...coach} />
    </>
  );
};
