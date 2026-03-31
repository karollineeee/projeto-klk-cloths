import { useState } from "react";
import { Card } from "./assets/components/Card";
import { BaseDeDados } from "./dataBase";

function App() {
  return (
    <>
        <h4>KLK Modas</h4>
        {BaseDeDados.map((p) => (
          <Card
            key={p.id}
            descricao={p.descricao}
            nome={p.nome}
            categoria={p.categoria}
            imagem={p.imagem}
          />
        ))}
    </>
  );
}

export default App;
