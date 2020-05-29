import React from "react";
import { Tool } from "../../types";

type Props = {
  tools: Tool[];
};

const Toolbar: React.FC<Props> = (props) => {
  const { tools } = props;

  const onDragStart = (e: React.DragEvent) => {
    const { id } = e.target as HTMLBaseElement;
    e.dataTransfer.setData("source", id);
  };

  return (
    <div className="container column center" data-testid="Toolbar-root">
      {tools && tools.length > 0 &&
        tools.map((tool, idx) => {
          return (
            <div className="item" key={idx}>
              <img
                id={tool.id}
                src={`./images/${tool.image}`}
                alt={tool.name}
                height={48}
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
