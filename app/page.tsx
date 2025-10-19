import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7fafa]">
      <div className="flex flex-col items-center justify-start px-6 pt-4 pb-24">
        <Image
          src="beach-vector.svg"
          alt="nature-vector"
          height={300}
          width={300}
          className="mb-15"
        />
        <h1 className="text-[#0d1c12] text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          Junte-se a uma comunidade de limpeza
        </h1>

        <p className="text-[#0d1c12] text-lg md:text-xl text-center mb-10 max-w-2xl leading-relaxed">
          Conecte-se com amigos, ganhe recompensas e faça a diferença no meio
          ambiente.
        </p>

        <Link href={"/tasks"}>
          <Button className="bg-[#21de6b] hover:bg-[#1bc55e] text-[#0d1c12] font-semibold text-lg px-12 py-6 rounded-2xl shadow-lg transition-all">
            Começar
          </Button>
        </Link>
      </div>

      <footer className="w-full bg-white border-t border-gray-100 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>© 2025 GreenChain. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <span>Feito com</span>
              <div className="text-red-500">❤️</div>
              <span>pelo planeta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
