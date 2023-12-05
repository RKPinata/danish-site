import "@/src/styles/globals.css";
import NavLayout from "@/components/layouts/nav";

import { Space_Grotesk } from '@next/font/google'
import localFont from '@next/font/local'

const spaceGrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700']
})
const skModernist = localFont({src:'../src/fonts/sk-modernist.otf'})



function MyApp({ Component, pageProps }) {

  return (
    <NavLayout spaceGrotesk={spaceGrotesk} skModernist={skModernist}>
      <Component {...pageProps} />
    </NavLayout>
  );
}


export default MyApp;

