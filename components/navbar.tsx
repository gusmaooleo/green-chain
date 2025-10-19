"use client";

import { List, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          href={"/tasks"}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            pathname === "/tasks" ? "text-[#21de6b]" : ""
          }`}
        >
          <List className="w-6 h-6" />
          <span className="text-sm font-medium">Tarefas</span>
        </Link>

        <Link
          href={"/rewards"}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            pathname === "/rewards" ? "text-[#21de6b]" : ""
          }`}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-sm font-medium">Recompensas</span>
        </Link>

        <Link
          href={"/profile"}
          className={`flex flex-col items-center gap-1 cursor-pointer ${
            pathname === "/profile" ? "text-[#21de6b]" : ""
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-sm font-medium">Perfil</span>
        </Link>
      </div>
    </nav>
  );
}
