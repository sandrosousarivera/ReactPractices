import "/Users/sandro/LOCAL/pyoyectos react/google-auth/src/app/globals.css"; // Ajusta la ruta si es necesario
import Nav from "./components/nav";

export const metadata = {
  title: "Tu Aplicación",
  description: "Descripción de tu aplicación",
};

export default function Layout({ children }) {
  return (
    <html lang="es">
      {" "}
      {/* Cambia el idioma según corresponda */}
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
