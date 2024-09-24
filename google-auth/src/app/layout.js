import "/Users/sandro/LOCAL/pyoyectos react/google-auth/src/app/globals.css";
import Nav from "./components/nav";

export const metadata = {
  title: "Google login",
  description: "Google login React + NodeJS project",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      {" "}
      <body>
        <div className="mx-14">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
