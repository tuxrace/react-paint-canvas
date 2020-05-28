import React from 'react';

type Props = {
    tools: any[]
}

const Toolbar: React.FC<Props> = (props) => {
    const { tools } = props;
    return (
        <div>
            {tools.length > 0 && tools.map(tool => {
                return (
                    <div> {tool.name} </div>
                )
            })}
        </div>
    )
}

export default Toolbar;
