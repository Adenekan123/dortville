
import { useState } from 'react';


const usePdfViewer = () => {
    const [file,setFile] = useState(null);

    const handleOpenViewer = (file) =>{
        setFile(file);
      }
   

  return [file,handleOpenViewer]
}

export default usePdfViewer