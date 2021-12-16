import styles from "./Footer.module.css";
const Footer = () => {
    return ( 
        <div className={styles.footercontainer}>
            <h1>Footer Page</h1>


<div className={styles.footerdisplay}>
            <div>
                <p>Usefull Links    </p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>
            </div>


            <div>
            <p>Contacts  </p>
                <ul>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">WhatsApp</a></li>
                    <li><a href="#">Tell:0717911169</a></li>
                   
                </ul>
            </div>


            <div>
            <p>Projects</p>
                <ul>
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">Beauty Shop</a></li>
                    <li><a href="#">Cars Company</a></li>
                    <li><a href="#">Parlindrome Checker</a></li>
                    <li><a href="#">Book Manager</a></li>
                </ul>
            </div>
            </div>

        </div>
     );
}
 
export default Footer;