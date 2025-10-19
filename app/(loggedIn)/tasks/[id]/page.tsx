import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Users, Clock } from "lucide-react";
import Link from "next/link";

// Dados mockados (em um app real, isso viria de uma API)
const tarefas = {
  1: {
    id: 1,
    distancia: "2.8km",
    nomeLugar: "Praia da Barra",
    tipo: "Limpeza de plásticos",
    imagemUrl: "https://www.costadosauipe.com.br/images/news/0478/porto_da_barra_1_1.jpg",
    descricao: "Ajude a remover plásticos e microplásticos que ameaçam a vida marinha nesta praia turística.",
    detalhes: "A Praia da Barra sofre com o acúmulo de plásticos trazidos pelas marés e pelo descarte inadequado de visitantes. Participe desta ação para preservar um dos cartões postais da nossa cidade.",
    participantes: 15,
    duracao: "2 horas",
    endereco: "Praia da Barra, Salvador - BA"
  },
  2: {
    id: 2,
    distancia: "8km",
    nomeLugar: "Itapajipe",
    tipo: "Remoção de lixo eletrônico",
    imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2mpBJwxII2r5L4MIqSk7WSMBCJ0A2GnZig&s",
    descricao: "Remoção de lixo eletrônico abandonado nas margens do rio que deságua no mar.",
    detalhes: "O rio Itapajipe tem sido usado como depósito irregular de lixo eletrônico. Ajude-nos a remover esses materiais tóxicos antes que contaminem o ecossistema marinho.",
    participantes: 8,
    duracao: "3 horas",
    endereco: "Rio Itapajipe, Salvador - BA"
  },
  3: {
    id: 3,
    distancia: "7km",
    nomeLugar: "Praia de Jaguaribe",
    tipo: "Coleta de microplásticos",
    imagemUrl: "https://static.wixstatic.com/media/954288_da06874619654e72a64ebf5042416a0f~mv2.jpg/v1/fill/w_776,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/954288_da06874619654e72a64ebf5042416a0f~mv2.jpg",
    descricao: "Coleta especializada de microplásticos que contaminam a areia e ameaçam o ecossistema marinho.",
    detalhes: "Microplásticos são uma ameaça invisível aos oceanos. Usaremos peneiras especiais para coletar essas partículas antes que sejam ingeridas pela fauna marinha.",
    participantes: 12,
    duracao: "2.5 horas",
    endereco: "Praia de Jaguaribe, Salvador - BA"
  },
  4: {
    id: 4,
    distancia: "2km",
    nomeLugar: "Praia da Pituba",
    tipo: "Coleta de resíduos",
    imagemUrl: "https://www.essemundoenosso.com.br/wp-content/uploads/2012/04/pituba1.jpg",
    descricao: "Participe da coleta de resíduos sólidos que poluem as areias e águas desta praia urbana.",
    detalhes: "A Praia da Pituba recebe grande fluxo de pessoas e consequentemente acumula diversos tipos de resíduos. Vamos juntos manter esta praia limpa e segura para todos.",
    participantes: 20,
    duracao: "2 horas",
    endereco: "Praia da Pituba, Salvador - BA"
  },
  5: {
    id: 5,
    distancia: "2.2km",
    nomeLugar: "Ondina",
    tipo: "Limpeza de trilhas",
    imagemUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1",
    descricao: "Limpeza das trilhas costeiras que deságuam no mar, prevenindo que lixo chegue ao oceano.",
    detalhes: "As trilhas de Ondina são caminhos naturais onde o lixo acumulado pode ser carregado para o mar durante as chuvas. Vamos interceptar esses resíduos antes que cheguem ao oceano.",
    participantes: 10,
    duracao: "3 horas",
    endereco: "Trilhas de Ondina, Salvador - BA"
  }
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function TaskDetailPage({ params }: PageProps) {
  const taskId = parseInt(params.id);
  const tarefa = tarefas[taskId as keyof typeof tarefas];

  if (!tarefa) {
    return (
      <div className="flex flex-col min-h-screen bg-[#f7fafa] items-center justify-center">
        <h1 className="text-2xl font-bold text-[#0d1c12]">Tarefa não encontrada</h1>
        <Link href="/tasks" className="mt-4 text-[#4f946b] hover:underline">
          Voltar para a lista de tarefas
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafa]">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <Link href="/tasks" className="flex items-center text-[#0d1c12]">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Link>
        <h1 className="text-[#0d1c12] text-xl font-semibold">Detalhes da Tarefa</h1>
        <div className="w-9"></div> {/* Espaço para centralizar o título */}
      </header>

      {/* Conteúdo */}
      <div className="flex-1 px-6 pb-24">
        {/* Imagem */}
        <div className="w-full h-64 rounded-xl overflow-hidden mb-6 mt-4">
          <img
            src={tarefa.imagemUrl}
            alt={tarefa.nomeLugar}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Informações principais */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#0d1c12] mb-2">{tarefa.nomeLugar}</h1>
          <p className="text-[#4f946b] text-lg font-medium mb-4">{tarefa.tipo}</p>
          <p className="text-[#0d1c12] text-base leading-relaxed">{tarefa.detalhes}</p>
        </div>

        {/* Detalhes */}
        <div className="bg-white rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold text-[#0d1c12] mb-4">Informações</h2>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-[#4f946b] mr-3" />
              <div>
                <p className="text-sm text-gray-600">Localização</p>
                <p className="text-[#0d1c12] font-medium">{tarefa.endereco}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Users className="w-5 h-5 text-[#4f946b] mr-3" />
              <div>
                <p className="text-sm text-gray-600">Participantes</p>
                <p className="text-[#0d1c12] font-medium">{tarefa.participantes} pessoas</p>
              </div>
            </div>

            <div className="flex items-center">
              <Clock className="w-5 h-5 text-[#4f946b] mr-3" />
              <div>
                <p className="text-sm text-gray-600">Duração estimada</p>
                <p className="text-[#0d1c12] font-medium">{tarefa.duracao}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de ação */}
        <Button className="w-full bg-[#21de6b] hover:bg-[#1bc55e] text-[#0d1c12] font-semibold text-lg py-6 rounded-2xl shadow-lg transition-all">
          Participar desta Tarefa
        </Button>
      </div>

      <Navbar />
    </div>
  );
}