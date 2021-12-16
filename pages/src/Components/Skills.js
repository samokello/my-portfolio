import styles from "./Skills.module.css";
import TagCloud from "TagCloud";



const Skills = () => {
    const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
    ];

    
    
    return ( 
        <div className={styles.skillscontainer}>
            
            <h1>Skills page</h1>
            <div className={styles.animations}>
                <div>
<p>My main area of experience is both Front-end Development(Client side of the web).</p>
<p>HTML,CSS,JS(TypeScript),Building small and medium web apps with React snd node.js,</p>
<p>I have also Full-stack developer experience with open source CMS like ()WordPress,React,Vs-code,and others</p>
<p>Visit my LinkedIn profile for more details or just contact me.</p>
</div>


            <div>
            
                <h2>WEB DEVELOPMENT</h2>
                <p>HTML5</p>
                <p>CSS</p>
                <p>WordPress</p>
                <p>Bootstrap</p>
                <p>Bootstrap</p>
                <p>Bootstrap</p>
            </div>
            </div>
        </div>
     );
}
 
export default Skills;