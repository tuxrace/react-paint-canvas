import React, { useLayoutEffect, useRef } from 'react'
import { TOOLS } from '../../contants';

const { SCISSOR, GLUE, ERASER } = TOOLS;

type Props = {
    type: string;
    width?: number;
    height?: number;
    pixelRatio?: number;
}

const Shape: React.FC<Props> = (props) => {
    const {
        width = 200,
        height = 200,
        type,
      } = props;

      const canvas = useRef<any>(null);
      
      const cutShape = (ctx: any) => {
        ctx.clip();
        ctx.beginPath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = "#355BB7";
        ctx.fillRect((160 / 2), 0, 24, 180);
      };

      const removeShape = (ctx: any) => {
        ctx.beginPath();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, width, height);
      };

      const drawRect = (ctx: any, tool: string) => {
        ctx.fillStyle = "green";
        ctx.rect(16, 16, 160, 160);
        ctx.fill();
      }

      const drawCircle = (ctx: any, tool: string) => {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
        ctx.fill();
      }

      const drawTriangle = (ctx: any, tool: string) => {
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(90, 24);
        ctx.lineTo(24, 160);
        ctx.lineTo(170, 160);
        ctx.closePath();
        ctx.fill();
      }

      const drawShape = (type: string, ctx: any, tool: string = 'Glue') => {
        switch(type){
            case 'rect': {
                drawRect(ctx, tool)
                if (tool === 'Scissor') {
                    cutShape(ctx);
                }
                if (tool === 'Eraser') {
                    removeShape(ctx);
                }
                break;
            }
            case 'circle': {
                drawCircle(ctx, tool)
                if (tool === 'Scissor') {
                    cutShape(ctx);
                }
                if (tool === 'Eraser') {
                    removeShape(ctx);
                }
                break;
            }
            case 'triangle': {
                drawTriangle(ctx, tool)
                if (tool === 'Scissor') {
                    cutShape(ctx);
                }
                if (tool === 'Eraser') {
                    removeShape(ctx);
                }
                break;
            }
        }
      }

      const handleOnDrop = (e: any) => {
        const tool = e.dataTransfer.getData("source");
        const ctx = canvas.current.getContext("2d");
        drawShape(type, ctx, tool);
      }

      useLayoutEffect(() => {
        const ctx = canvas.current.getContext("2d");
        ctx.save();
        drawShape(type, ctx);
      });
    
      const style = { width, height, border: "1px solid" };
      return (
        <canvas ref={canvas} width={width} height={height} style={style} onDrop={handleOnDrop} />
      );
}

export default Shape