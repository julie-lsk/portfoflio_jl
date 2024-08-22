import { useState } from 'react';
import './sidebar.scss';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';



function Sidebar()
{
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`sidebar ${open ? "open" : ""}`}> 

                <div className="background-expand"></div>
                
                <Links />

            </div>

            <ToggleButton setOpen={setOpen} open={open} />
  
        </>
    )
};

export default Sidebar;