import styles from "./Contact.module.css";

const Contact = () => {
    return (  
        <div className={styles.container}>
              
                    <div className={styles.formcontent}>

<div className={styles.address}>
<h3>Name</h3>
<p>Sam okello</p>
</div>

<div className={styles.address}>
<h3>Address</h3>
<p>0717911169</p>
</div>


<div className={styles.address}>
    <h3>Email</h3>
<p>samokello024@gmail.com</p>
</div>



        </div>


<div className={styles.formcontainer}>
            <h1>Contact me</h1>
            <p>If you have any question please don't hesitate to contact me using the form below...</p>
        

        <div className={styles.formcontainer2}>
<form>
    <div className={styles.inputdisplay}>
    <input type="text" placeholder="Enter Name" className={styles.name}/>
    <input type="email" placeholder="Enter Email"  className={styles.name}/>
    </div>

<div className={styles.inputcolumn}>
    <input type="text" placeholder="Subject"  className={styles.subject}/>
    <input type="text" placeholder="Message"  className={styles.message}/>

    </div>


    <button className={styles.sendbtn}>Send Message</button>
</form>

        </div>
        </div>





        </div>
    );
}
 
export default Contact;