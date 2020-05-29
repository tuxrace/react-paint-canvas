import { useEffect } from 'react'

const useDrop = () => {
    // When hook to the component it prevents from listening to dragover event
    useEffect(() => {
        document.addEventListener("dragover", (event) => {
            event.preventDefault();
          });
          document.addEventListener("drop", () => {});
      
    }, [])
}

export default useDrop;
