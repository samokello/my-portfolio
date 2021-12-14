import Main from "./Main/Main";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./Nav/Nav";

export default function Home() {
  return (
    <div>
    
      <Nav />
      <Main />
    </div>
  );
}
