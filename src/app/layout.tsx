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
      <body className="bg-[#f5f6f8]">
        {children}
      </body>
    </html>
  );
}
