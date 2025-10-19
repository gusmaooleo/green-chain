import Navbar from "@/components/navbar"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafa]">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
        <Link href="/tasks" className="cursor-pointer">
          <button className="text-[#0d1c12]">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-[#0d1c12] text-xl font-semibold">Recompensas</h1>
      </header>

      <div className="flex-1 px-6 py-6 pb-24">
        <section className="mb-8">
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Recompensas disponíveis
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Link href={"https://ecologiaaplicada.ufba.br/"}>
                <div className="bg-[#2d2d2d] rounded-2xl overflow-hidden relative mb-3 group cursor-pointer">
                  <div className="absolute top-3 right-3 z-10 bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                  <div className="aspect-video w-full relative">
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlpd0S-gDoii1iaeI-8Ha1smOFGWmQpyrzg&s"
                      }
                      alt="curso-profissionalizante"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
              <p className="text-[#0d1c12] text-sm font-medium">
                Cursos profissionalizantes
              </p>
            </div>

            <div className="flex flex-col">
              <div className="bg-[#4f6f5f] rounded-2xl overflow-hidden mb-3 group cursor-pointer">
                <div className="aspect-video w-full relative">
                  <img
                    src="https://images.tcdn.com.br/img/img_prod/726083/cesta_basica_esperanca_emb_plastica_32_itens_59_1_8929267aa840155a8b06e53b4bf8626e.jpg"
                    alt="Cestas básicas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <p className="text-[#0d1c12] text-sm font-medium">
                Cestas básicas
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Seu progresso
          </h2>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#0d1c12] text-sm font-medium">
                Bonificações alcançadas
              </p>
              <p className="text-[#0d1c12] text-sm font-semibold">75/100</p>
            </div>
            <div className="w-full h-2 bg-[#e8f2ed] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#21de6b] rounded-full"
                style={{ width: "75%" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-[#4f946b] text-sm mb-1">Bonificações totais</p>
              <p className="text-[#0d1c12] text-2xl font-bold">150</p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-[#4f946b] text-sm mb-1">
                Bonificações pendentes
              </p>
              <p className="text-[#0d1c12] text-2xl font-bold">25</p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 col-span-2">
              <p className="text-[#4f946b] text-sm mb-1">
                Bonificações resgatadas
              </p>
              <p className="text-[#0d1c12] text-2xl font-bold">125</p>
            </div>
          </div>
        </section>
      </div>

      <Navbar />
    </div>
  );
}