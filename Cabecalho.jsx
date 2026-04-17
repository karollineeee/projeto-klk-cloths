import "tailwindcss";

export function Cabecalho (){
    return (
        <header className="bg-pink-700 text-white flex justify-between items-center">
          <img src="src/assets/imagens/KLK.png"/>

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
    )
}