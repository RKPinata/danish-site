import { spaceGrotesk } from "@/public/fonts/font-provider";

function GoogleFontsLayout({ children }) {
  return (
    <div className={`${spaceGrotesk.variable}`}>
      {children}
    </div>
  );
}

export default GoogleFontsLayout;
