import styles from "./About.module.css";
import Image from "next/image";
import sam from "../../../public/Images/sam.jpg";
const About = () => {
    return (  
        <div className={styles.aboutcontainer}>
            <h1>About Me</h1>
            <div className={styles.aboutcontent}>
                <div className={styles.aboutme}>
                    <h3>I'm Sam Okello and I'm a DEVELOPER</h3>
                    <p></p>
                </div>
                <div className={styles.aboutimage}>
<Image src={sam} width={"400px"} height={"600px"}/>
                </div>

            </div>

        </div>
    );
}
 
export default About