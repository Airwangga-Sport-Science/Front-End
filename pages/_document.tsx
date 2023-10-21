import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import IndexNavbar from "@/components/Navbars/IndexNavbar";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased bg-slate-100 font-poppins ">


          <IndexNavbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
