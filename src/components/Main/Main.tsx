import React, { useEffect, useState } from "react";
import Toolbar from "../Toolbar";
import axios from "axios";

import "./Main.style.css";
import Shape from "../Shape";
import { Tool } from "../../types";
import { SHAPES } from "../../contants";
import useDrop from "../../hooks/useDrop";

const { RECT, CIRCLE, TRIANGLE } = SHAPES;

const Main = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [dimensions, setDimensions] = useState<{width: number; height: number;} | {}>({});

  // Prevent dragover events hooks
  useDrop();

  useEffect(() => {
    const getTools = async () => {
      const result = await axios.get("./db.json").then((res) => res.data);
      const toolbarResult = result && result.toolbar;
      const dimensionsResult = result && result.dimensions;
      setTools(toolbarResult);
      setDimensions(dimensionsResult);
    };
    getTools();
  }, []);

  return (
    <div className="mainRoot" data-testid="main-root">
      <div className="container row">
        <div className="item">
          <div className="container board">
            <Shape type={RECT} {...dimensions}/>
            <Shape type={CIRCLE}  {...dimensions}/>
            <Shape type={TRIANGLE}  {...dimensions}/>
          </div>
        </div>
        <div className="item toolbar">
          <Toolbar tools={tools} />
        </div>
      </div>
    </div>
  );
};

export default Main;
