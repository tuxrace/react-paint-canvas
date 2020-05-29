import React, { useEffect, useState } from "react";

type Props = {
  tools: any[];
};

const Toolbar: React.FC<Props> = (props) => {
  const { tools } = props;
  const [refs, setRefs] = useState<any>([]);

  useEffect(() => {
    refs.length > 0 &&
      refs.forEach((refItem: any) => {
        const toolObject = refItem.current;
        toolObject.addEventListener("dragstart", () => {
          console.log("start");
        });
        toolObject.addEventListener("dragstop", () => {
          console.log("stop");
        });
      });
  }, [refs]);

  useEffect(() => {
    const newRefs =
      tools.length > 0 && tools.map((item, idx) => React.createRef());
    setRefs(newRefs);
  }, [tools]);

  const onDragStart = (e: any) => {
    const { id } = e.target;
    e.dataTransfer.setData("source", id);
  };

  return (
    <div className="container column center">
      {tools.length > 0 &&
        tools.map((tool, idx) => {
          return (
            <div className="item" key={idx}>
              <img
                id={tool.name}
                src={`./images/${tool.image}`}
                alt={tool.name}
                height={48}
                ref={refs[idx]}
                draggable="true"
                onDragStart={onDragStart}
                className="toolbarIcon"
              />
            </div>
          );
        })}
    </div>
  );
};

export default Toolbar;
