import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

interface Tarefa {
  id: number;
  distancia: string;
  nomeLugar: string;
  tipo: string;
  imagemUrl: string;
  descricao: string;
}

const tarefasProximas: Tarefa[] = [
  {
    id: 1,
    distancia: "2.8km",
    nomeLugar: "Praia da Barra",
    tipo: "Limpeza de plásticos",
    imagemUrl:
      "https://www.costadosauipe.com.br/images/news/0478/porto_da_barra_1_1.jpg",
    descricao: "Ajude a remover plásticos e microplásticos que ameaçam a vida marinha nesta praia turística."
  },
  {
    id: 4,
    distancia: "2km",
    nomeLugar: "Praia da Pituba",
    tipo: "Coleta de resíduos",
    imagemUrl:
      "https://www.essemundoenosso.com.br/wp-content/uploads/2012/04/pituba1.jpg",
    descricao: "Participe da coleta de resíduos sólidos que poluem as areias e águas desta praia urbana."
  },
  {
    id: 5,
    distancia: "2.2km",
    nomeLugar: "Ondina",
    tipo: "Limpeza de trilhas",
    imagemUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/60/93/4f/poucos-conhecem-mas-esta.jpg?w=700&h=400&s=1",
    descricao: "Limpeza das trilhas costeiras que deságuam no mar, prevenindo que lixo chegue ao oceano."
  },
];

const tarefasDistantes: Tarefa[] = [
  {
    id: 2,
    distancia: "8km",
    nomeLugar: "Itapajipe",
    tipo: "Remoção de lixo eletrônico",
    imagemUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2mpBJwxII2r5L4MIqSk7WSMBCJ0A2GnZig&s",
    descricao: "Remoção de lixo eletrônico abandonado nas margens do rio que deságua no mar."
  },
  {
    id: 3,
    distancia: "7km",
    nomeLugar: "Praia de Jaguaribe",
    tipo: "Coleta de microplásticos",
    imagemUrl:
      "https://static.wixstatic.com/media/954288_da06874619654e72a64ebf5042416a0f~mv2.jpg/v1/fill/w_776,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/954288_da06874619654e72a64ebf5042416a0f~mv2.jpg",
    descricao: "Coleta especializada de microplásticos que contaminam a areia e ameaçam o ecossistema marinho."
  },
];

function TasksItem({ tarefa }: { tarefa: Tarefa }) {
  return (
    <Link href={`/tasks/${tarefa.id}`}>
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#e8f2ed] transition-colors cursor-pointer">
        <div className="flex-1">
          <p className="text-[#4f946b] text-sm mb-1">{tarefa.distancia}</p>
          <h3 className="text-[#0d1c12] text-base font-semibold mb-1">
            {tarefa.nomeLugar}
          </h3>
          <p className="text-[#4f946b] text-sm mb-2">{tarefa.tipo}</p>
          <p className="text-[#0d1c12] text-xs opacity-75 line-clamp-2">
            {tarefa.descricao}
          </p>
        </div>
        <div className="w-32 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={tarefa.imagemUrl}
            alt={tarefa.nomeLugar}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default function TasksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafa]">
      <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <h1 className="text-[#0d1c12] text-xl font-semibold">Tarefas</h1>
        <Button variant="ghost" size="icon" className="text-[#0d1c12]">
          <Plus className="w-6 h-6" />
        </Button>
      </header>

      <div className="px-6 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4f946b]" />
          <Input
            placeholder="Pesquisar"
            className="pl-10 bg-[#e8f2ed] border-none text-[#4f946b] placeholder:text-[#4f946b]"
          />
        </div>
      </div>

      <div className="px-6 pb-4 flex gap-3">
        <button className="px-4 py-2 bg-[#e8f2ed] text-[#0d1c12] text-sm font-medium rounded-lg">
          Todos
        </button>
        <button className="px-4 py-2 bg-[#e8f2ed] text-[#0d1c12] text-sm font-medium rounded-lg">
          Próximo
        </button>
        <button className="px-4 py-2 bg-[#e8f2ed] text-[#0d1c12] text-sm font-medium rounded-lg">
          Distante
        </button>
      </div>

      <div className="flex-1 px-6 pb-24">
        <section className="mb-8">
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Tarefas próximas
          </h2>

          <div className="space-y-4">
            {tarefasProximas.map((tarefa) => (
              <TasksItem key={tarefa.id} tarefa={tarefa} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[#0d1c12] text-lg font-bold mb-4">
            Tarefas distantes
          </h2>

          <div className="space-y-4">
            {tarefasDistantes.map((tarefa) => (
              <TasksItem key={tarefa.id} tarefa={tarefa} />
            ))}
          </div>
        </section>
      </div>

      <Navbar />
    </div>
  );
}