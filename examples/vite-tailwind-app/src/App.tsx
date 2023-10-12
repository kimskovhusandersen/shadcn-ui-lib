import "./App.css";
import "@kimskovhusandersen/shadcn-ui-library/dist/style.css";
import {
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@kimskovhusandersen/shadcn-ui-library";
import { Terminal } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`align-center flex justify-start ${mode} h-[100vh] flex-col`}
    >
      <h1 className="text-3xl font-bold underline">Component Library</h1>
      <div className="py-4">
        <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
      </div>
      <div className="py-4">
        <Button variant="destructive">Shadcn Button</Button>
      </div>

      <div className="py-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="py-4">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>

      <div className="py-4">
        <ul className="text-left">
          <li> Features:</li>
          <li>
            {" "}
            - Tree-shakeable (components you don't use won't be included in your
            bundle)
          </li>
          <li>- Dark mode support</li>
          <li>
            {" "}
            - Override library styles with your own using tailwindcss or your
            own css
          </li>
        </ul>
      </div>
    </div>
  );
}
