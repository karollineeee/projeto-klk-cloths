import { Card } from "./assets/components/Card";
import { BaseDeDados } from "./dataBase";
import { useState } from "react";
import { Cabecalho } from "./assets/components/Cabecalho";
import { Menu } from "./assets/components/Menu";
import "tailwindcss";

function Fundo() {
  return (
    <div className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/imagens/fundo.png')", opacity: 0.3, filter: "grayscale(100%)" }}
    />
  );
}

function GradeDeCards({ produtosFiltrados }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: "10px", padding: "50px", justifyItems: "center" }}>
      <Card itensFiltrados={produtosFiltrados} />
    </div>
  );
}

function App() {
  const [categoriaFiltro, setcategoriaFiltro] = useState(["Todos"]);
  const [tamanhoFiltro, setTamanhoFiltro] = useState(["Todos"]);
  const [tecidoFiltro, setTecidoFiltro] = useState(["Todos"]);
  const [busca, setBusca] = useState("");

  const produtosFiltrados = BaseDeDados.filter(({ nome, categoria, descricao, tamanhos, tecido }) =>
    (categoriaFiltro.includes("Todos") || categoriaFiltro.includes(categoria)) &&
    (tamanhoFiltro.includes("Todos") || tamanhos?.some((t) => tamanhoFiltro.includes(t))) &&
    (tecidoFiltro.includes("Todos") || tecidoFiltro.includes(tecido)) &&
    [nome, categoria, descricao].some((c) => c.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen w-full">
      <Fundo />
      <div className="relative z-10">
        <div className="min-h-screen w-full">
          <Cabecalho />
          <Menu
            categoriaFiltro={categoriaFiltro} setcategoriaFiltro={setcategoriaFiltro}
            tamanhoFiltro={tamanhoFiltro} setTamanhoFiltro={setTamanhoFiltro}
            tecidoFiltro={tecidoFiltro} setTecidoFiltro={setTecidoFiltro}
            busca={busca} setBusca={setBusca}
          />
          <GradeDeCards produtosFiltrados={produtosFiltrados} />
        </div>
      </div>
    </div>
  );
}

export default App;
