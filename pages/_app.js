import Link from "next/link";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import PrivateRoute from "../component/PrivateRoute";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     console.log(`Loading: ${url}`);
  //     NProgress.start();
  //   };

  //   const handleStop = () => {
  //     NProgress.done();
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleStop);
  //   router.events.on("routeChangeError", handleStop);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleStop);
  //     router.events.off("routeChangeError", handleStop);
  //   };
  // }, [router]);

  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/service">Service</Link>
            </li>
            <li>
              <Link href="/post">Post</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <NextNProgress
        color="#e63946"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <div className="container">
        {Component.private ? (
          <PrivateRoute Component={Component}>
            <Component {...pageProps} />
          </PrivateRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </>
  );
}
