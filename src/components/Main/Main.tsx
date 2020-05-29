import React, { useRef, useEffect, useState } from 'react';
import Toolbar from '../Toolbar';
import axios from 'axios';

import './Main.style.css';
import Shape from '../Shape';

const Main = () => {
    const canvasRef = useRef<any>(null);
    const [ tools, setTools ] = useState<any[]>([])
    const [ dimensions, setDimensions ] = useState<any>({
        width: 500,
        height: 500,
    })

    useEffect(() => {
        document.addEventListener("dragover", event => {
            event.preventDefault();
        });
        document.addEventListener("drop", () => {});

        const getTools = async () => {
            const result = await axios.get('./db.json').then(res => res.data);
            const toolbarResult = result && result.toolbar;
            const dimensionsResult = result && result.dimensions;
            setTools(toolbarResult);
            setDimensions(dimensionsResult);
        }
        getTools();
    }, []);

    return (
        <div className="mainRoot">
            <div className="container row">
                <div className="item">
                    <div className="container board">
                        <Shape type="rect"/>
                        <Shape type="circle" />
                        <Shape type="triangle" />
                    </div>
                </div>
                <div className="item toolbar">
                    <Toolbar tools={tools}/>    
                </div>
            </div>
        </div>
    )
}

export default Main;
