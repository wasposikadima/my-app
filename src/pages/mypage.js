import { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


const inter = Inter({ subsets: ["latin"] });


export default function MyPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head>
        <title>Вифания Анапа</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div >
          <CssBaseline />
          <Container fixed >
            <Box sx={{height: "100vh", width: "40vw" }} className="contener-color" >
              <img src="/picture.png" alt="Photo" className="rounded-img"/>
              <h1 style={{color: "red", backgroundColor: "yellow"}}> Olga </h1>
              <p>Hello word</p>
              <a href="https://propokot.ru/" rel="noreferrer" target="_blank" >
              <button style={{color: "yellow", backgroundColor: "grey"}} className="rounded-img">like</button>
              </a>
            </Box>
          </Container>
        </div>
        
      </main>
    </>
  );
}
