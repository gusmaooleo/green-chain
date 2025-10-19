import Navbar from "@/components/navbar";
import {
  ArrowLeft,
  Gift,
  HandHeart,
  UserIcon,
  Bell,
  Shield,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export default function PerfilPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafa]">
      <header className="bg-white px-6 py-4 flex items-center gap-4 border-b border-gray-200">
        <Link href="/tasks">
          <button className="text-[#0d1c12]">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-[#0d1c12] text-xl font-semibold">Perfil</h1>
      </header>

      <div className="flex-1 px-6 py-6 pb-24">
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-[#f5e6d3]">
            <img
              src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
              alt="Mariana Silva"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[#0d1c12] text-2xl font-bold mb-1">
            Mariana Silva
          </h2>
          <p className="text-[#4f946b] text-base mb-1">@marianasilva</p>
          <p className="text-[#4f946b] text-sm">Entrou em 2023</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col items-center">
            <p className="text-[#0d1c12] text-4xl font-bold mb-2">12</p>
            <p className="text-[#4f946b] text-sm">Tarefas</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col items-center">
            <p className="text-[#0d1c12] text-4xl font-bold mb-2">5</p>
            <p className="text-[#4f946b] text-sm">Bonificações</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Bonificações Resgatadas
          </h2>

          <div className="space-y-3">
            <div className="bg-[#e8f2ed] rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#0d1c12] text-base font-semibold mb-1">
                  Desconto em produtos sustentáveis
                </h3>
                <p className="text-[#4f946b] text-sm">20 de outubro de 2023</p>
              </div>
            </div>

            <div className="bg-[#e8f2ed] rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <HandHeart className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#0d1c12] text-base font-semibold mb-1">
                  Doação para organização ambiental
                </h3>
                <p className="text-[#4f946b] text-sm">15 de setembro de 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Configurações
          </h2>

          <div className="space-y-2">
            <button className="w-full bg-[#e8f2ed] rounded-xl p-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <UserIcon className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <span className="text-[#0d1c12] text-base font-medium">
                Editar Perfil
              </span>
            </button>

            <button className="w-full bg-[#e8f2ed] rounded-xl p-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <span className="text-[#0d1c12] text-base font-medium">
                Notificações
              </span>
            </button>

            <button className="w-full bg-[#e8f2ed] rounded-xl p-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <span className="text-[#0d1c12] text-base font-medium">
                Privacidade
              </span>
            </button>

            <button className="w-full bg-[#e8f2ed] rounded-xl p-4 flex items-center gap-3 text-left">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-[#0d1c12]" />
              </div>
              <span className="text-[#0d1c12] text-base font-medium">
                Ajuda
              </span>
            </button>
          </div>
        </section>
      </div>

      <Navbar />
    </div>
  );
}
