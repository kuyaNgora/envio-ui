import React from "react";
import styled from "styled-components";
import { CircleXmark } from "@envio-ui/icons";
import { useComponentStyles } from "../../../../system";

export interface ResultProps {
  className?: string;
  style?: React.CSSProperties;
  data?: string[];
  onRemove?: (e: number) => void;
}

const Wrapper = styled("div")`
  position: relative;
  margin-right: 24px;
  margin-bottom: 10px;
`;

const Container = styled("div")`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Remove = styled("div")`
  position: absolute;
  top: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Result: React.FC<ResultProps> = ({
  className,
  style,
  data,
  onRemove,
}) => {
  const sx = useComponentStyles("result");

  const resultCard = (e?: string[]) => {
    if (e && e?.length > 0) {
      return (
        <Container>
          {e?.map((img: string, id: number) => (
            <Wrapper id={`${id}`}>
              <Remove onClick={() => onRemove && onRemove(id)}>
                <CircleXmark size={20} fill="#D63939" />
              </Remove>
              <img src={img} alt="" style={sx} />
            </Wrapper>
          ))}
        </Container>
      );
    }
    return null;
  };

  return (
    <div className={className} style={style}>
      {resultCard(data)}
    </div>
  );
};

export default Result;
