import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-auto py-6">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>
          Made with <span className="text-red-500">♥</span> by{" "}
          <Link
            href="https://github.com/MeAkash77"
            className="underline hover:text-primary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akash
          </Link>{" "}
          in 2025.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com/MeAkash77"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/me-akash77/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
