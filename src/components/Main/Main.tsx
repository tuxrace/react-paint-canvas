import React, { useRef, useEffect, useState } from 'react';
import Toolbar from '../Toolbar';
import axios from 'axios';

const Main = () => {
    const canvasRef = useRef<any>(null);
    const [ tools, setTools ] = useState<any[]>([])

    useEffect(() => {
        const canvasObj = canvasRef.current;
        if (canvasObj){
            const ctx = canvasObj.getContext('2d');
            ctx.fillStyle = 'green';
            ctx.fillRect(10, 10, 150, 100);
        }
    }, [canvasRef]);

    useEffect(() => {
        const getTools = async () => {
            const result = await axios.get('../../db.json').then(res => res.data);
            setTools(result);
        }
        getTools();
    }, []);

    return (
        <div>
            <div>
                <canvas ref={canvasRef} height={500} width={500} style={{border: '1px solid'}} />    
            </div>
            <div>
                <Toolbar tools={tools}/>    
            </div>
        </div>
    )
}

export default Main;
