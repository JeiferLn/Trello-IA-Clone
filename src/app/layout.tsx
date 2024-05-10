import "./globals.css";


export const metadata = {
  title: "Trello IA Clone",
  description: "Generate by JeiferLn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
