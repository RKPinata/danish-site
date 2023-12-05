import "@/src/styles/globals.css";
import { Space_Grotesk } from '@next/font/google'

import NavLayout from "@/components/layouts/nav";

const spaceGrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700']
})

import localFont from '@next/font/local'
const skModernist = localFont({src:'../fonts/sk-modernist.otf'})


function MyApp({ Component, pageProps }) {

  return (
    <NavLayout spaceGrotesk={spaceGrotesk} skModernist={skModernist}>
      <Component {...pageProps} />
    </NavLayout>
  );
}


export default MyApp;

