import { Card } from "./assets/components/Card";
import { BaseDeDados } from "./dataBase";
import "tailwindcss";


function App() {
  return (
    <>
      {/*Cabeçario do site*/}
      <header className="bg-pink-700 text-white flex justify-between items-center">
        <h1> KLK modas</h1>

        {/*ícones de shopping bag e perfil*/}
        <div className="flex items-center gap-4">
          <button className="bg-transparent border-none cursor-pointer">
            <img src="src/assets/imagens/shopping_bag.png" className="w-8 h-8"/>
          </button>

          <button className="bg-transparent border-none cursor-pointer">
            <img src="src/assets/imagens/profile_icon.png" className="w-8 h-8"/>
          </button>
        </div>
      </header>

      {/*Menu de produtos*/}
      <section className="flex justify-around bg-pink-900 text-white">
        <button className="bg-transparent border-none cursor-pointer"> Feminino </button>
        <button className="bg-transparent border-none cursor-pointer"> Masculino </button>
        <button className="bg-transparent border-none cursor-pointer"> Infantil </button>
        <button className="bg-transparent border-none cursor-pointer"> Acessórios </button>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          gap: "10px",
          padding: "50px",
          justifyItems: "center",
        }}
      >
        {BaseDeDados.map((p) => (
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
