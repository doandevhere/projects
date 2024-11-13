import { Rabbit } from "lucide-react";
import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t dark:border-gray-800 bg-white/90 dark:bg-black/90">
      <Container>
        <div className="w-full">
          <div className="sm:flex sm:items-center justify-center sm:justify-between">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Rabbit size={48} className="text-primary" strokeWidth={1.125} />
              <span className="font-black text-primary mt-2">Rabbit Jobs</span>
            </Link>
            <ul className="mt-4 sm:mt-0 flex flex-wrap gap-4 justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="https://github.com/doandevhere/projects/tree/main/apps/frontend_rabbit_jobs">
                  Github
                </Link>
              </li>
              <li>
                <Link href="/">Privacy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
