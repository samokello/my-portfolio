import styles  from "./Main.module.css";
import Image from "next/image";
import sam10 from "../../../public/Images/sam10.png"

const Main = () => {
    return ( 


        <div className={styles.mainpage}>
{/* <div className={styles.intro}>
    <h1>WELCOME TO MY PORTFOLIO</h1>
<p>The purpose of javaScript Mastery is to aspiring and established developers to take theire development skills to the next level and build awesome websites </p>
<button className={styles.btn}>Learn More</button>
</div> */}


<div className={styles.introduction}>
<div className={styles.page}>
<Image src={sam10} width={""} height={""}/>

</div>
<div className={styles.pagecontent}>

<h2>HELLO!!My name is:</h2>
<h2>SAM OKELLO,Front-end developer.Do you live and breath digital development?? I'm your Developer.</h2>
</div>
</div>

       </div>


    );
}
 
export default Main