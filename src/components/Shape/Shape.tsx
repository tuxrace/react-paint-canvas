import React, { useLayoutEffect, useRef } from 'react'

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
        pixelRatio = window.devicePixelRatio,
        type,
      } = props;

      const canvas = useRef<any>(null);
      
      const drawRect = (ctx: any) => {
        ctx.fillStyle = "green";
        // ctx.rect(16, 16, 160, 160);
        // ctx.fill()

        // Clip a rectangular area
        ctx.rect(16, 16, 160, 160);
        ctx.fill();
        ctx.clip();
        // Draw red rectangle after clip()
        ctx.fillStyle = "#355BB7";
        ctx.fillRect((160 / 2), 0, 24, 180);
      }

      const drawCircle = (ctx: any) => {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
        ctx.fill();
        // Draw red rectangle after clip()
        ctx.fillStyle = "#355BB7";
        ctx.fillRect((width / 2), 0, 24, 180);
      }

      const drawTriangle = (ctx: any) => {
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(90, 24);
        ctx.lineTo(24, 160);
        ctx.lineTo(170, 160);
        ctx.closePath();
        ctx.fill();
        // Draw red rectangle after clip()
        ctx.fillStyle = "#355BB7";
        ctx.fillRect((width / 2) - 24, 0, 24, 180);
      }

      const drawShape = (type: string, ctx: any) => {
        switch(type){
            case 'rect': {
                drawRect(ctx)
                break;
            }
            case 'circle': {
                drawCircle(ctx)
                break;
            }
            case 'triangle': {
                drawTriangle(ctx)
                break;
            }
        }
      }

      const handleOnDrop = (e: any) => {
        console.log(e.dataTransfer.getData("source"), type)
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