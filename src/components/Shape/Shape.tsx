import React, { useLayoutEffect, useRef } from "react";
import { TOOLS, SHAPES } from "../../contants";

const { SCISSOR, ERASER } = TOOLS;
const { RECT, CIRCLE, TRIANGLE } = SHAPES;
type Props = {
  type: string;
  width?: number;
  height?: number;
};

const Shape: React.FC<Props> = (props) => {
  const { width = 200, height = 200, type } = props;
  const canvas = useRef<any>(null);

  // Shapes
  const Rect = (ctx: any) => {
    ctx.fillStyle = "green";
    ctx.rect(16, 16, width, 120);
    ctx.fill();
  };

  const Circle = (ctx: any) => {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
    ctx.fill();
  };

  const Triangle = (ctx: any) => {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(90, 24);
    ctx.lineTo(24, width);
    ctx.lineTo(170, width);
    ctx.fill();
  };

  const getShape: any = {
    [RECT]: Rect,
    [CIRCLE]: Circle,
    [TRIANGLE]: Triangle,
  };

  // Tool Actions
  const cutShape = (ctx: any) => {
    ctx.fillStyle = "#355BB7";
    ctx.fillRect(180 / 2, 0, 24, height);
  };

  const removeShape = (ctx: any) => {
    ctx.clearRect(0, 0, width, height);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const tool = e.dataTransfer.getData("source");
    const ctx = canvas.current.getContext("2d");
    const drawShape = getShape[type];

    if (tool === SCISSOR) {
      cutShape(ctx);
    } else if (tool === ERASER) {
      removeShape(ctx);
    } else {
      drawShape(ctx);
    }
  };

  useLayoutEffect(() => {
    const ctx = canvas.current.getContext("2d");
    ctx.save();
    const drawShape = getShape[type];
    drawShape(ctx);
  });

  const style = { width, height };
  return (
    <canvas
      ref={canvas}
      width={width}
      height={height}
      style={style}
      onDrop={handleOnDrop}
    />
  );
};

export default Shape;
