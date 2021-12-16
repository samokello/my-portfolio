import Main from "./src/Components/Main";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./src/Components/Nav";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Skills from "./src/Components/Skills";
import Particles from "react-tsparticles";
import particlesOptions from "./src/vendor/particles/particles";
import Footer from "./src/Components/Footer";



export default function Home() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (

    <div> 
      <Head className={styles.particlespage}>
      <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"></script>

      </Head>
      { <Particles id="tsparticles" options={particlesOptions} init={particlesInit} loaded={particlesLoaded} />    }
     <Nav />
      {/* <Main />     */}
      {/* <About />    */}
    {/* <Contact /> 
      <Skills /> */}
      <Footer />
          </div>
  );
}
