import "@leebrooks3/tailwind-config/styles/global.css";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={"h-full"}>
            <body className={"h-full bg-gray-50"}>{children}</body>
        </html>
    );
}

export default RootLayout;
