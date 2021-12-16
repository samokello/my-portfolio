import styles from "./Nav.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Image from "next/image";

const Nav = () => {
    const [menu, setMenu] = useState(true)
const hundleManuClick=()=>{
setMenu(!menu);

}

const renderMenu=()=>{
    return(

        <div className={styles.nav}>
            <div className={styles.backgroundimage}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Colaboration</a></li>
                <li><a href="#">Skills</a></li>
               

            </ul>
            </div>  
        </div>
       
    )
}

    return ( 

        <div className={styles.content}>
            <div className={styles.logodisplay}>
            <div className={styles.mylogo}>

            </div>
            <div className={styles.logo}>
                <h1>PORTFOLIO</h1>
            </div>
            </div>
<div className={styles.icons} onClick={hundleManuClick}>
    {menu?<MenuIcon />:<ClearIcon />}
</div>


    {menu===false?renderMenu():<></>}


        </div>
     );
}
 
export default Nav