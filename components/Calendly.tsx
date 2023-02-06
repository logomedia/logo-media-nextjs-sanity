import { PopupButton } from "react-calendly";
import { useEffect, useState } from 'react'
import {Button} from '@mui/material';

const Calendly = ({ url, prefill, pageSettings, utm, text, styles }) => {
    
        const[root, setRoot] = useState('');
        useEffect(()=> setRoot(document.getElementById("__next")),[])
    
    return (
   
            <PopupButton url="https://calendly.com/logo_media" rootElement={root} text={text} className={styles} pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '540e6f',
            textColor: '000'
        }} />
      
        
        ) 
  
    
  
};


export default Calendly;