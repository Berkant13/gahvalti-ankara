import "./globals.css";

export const metadata = {
  title: "Gahvaltı Ankara — Organik, yöresinden, sağlıklı",
  description:
    "Ankara'da ilk ve tek, yöresinden gelen ürünlerle organik bir köy kahvaltısı.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic,700italic|Merriweather:300,400italic,300italic,400,700italic&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
