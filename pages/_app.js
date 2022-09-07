import '../styles/main.scss'
import "../styles/Home.module.scss"
import RootLayout from "../components/RootLayout";
import { useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }) {


useEffect(()=>{
  import("bootstrap/dist/js/bootstrap");
},[])



  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
