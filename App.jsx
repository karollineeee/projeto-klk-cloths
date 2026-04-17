import { Card } from "./assets/components/Card";
import { BaseDeDados } from "./dataBase";
import { useState } from "react";
import { Cabecalho } from "./assets/components/Cabecalho";
import { Menu } from "./assets/components/Menu";
import "tailwindcss";

function App() {
  const [categoriaFiltro, setcategoriaFiltro] = useState ("Todos");
  const produtosFiltrados = categoriaFiltro === "Todos" ? BaseDeDados: BaseDeDados.filter ((p)=>p.categoria===categoriaFiltro)

  return (
    <>
      <Cabecalho/>
      <Menu categoriaFiltro={categoriaFiltro} setcategoriaFiltro={setcategoriaFiltro}/>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          gap: "10px",
          padding: "50px",
          justifyItems: "center"
        }}
      >
        {produtosFiltrados.map((p) => (
          <Card
            key={p.id}
            descricao={p.descricao}
            nome={p.nome}
            categoria={p.categoria}
            imagem={p.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
