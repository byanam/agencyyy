import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="byanam-theme">
      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto p-8">byanam portfolio</main>
      </div>
    </ThemeProvider>
  );
}
