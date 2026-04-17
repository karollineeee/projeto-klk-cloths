export function Menu (categoriaFiltro, setcategoriaFiltro){
    
    return(
        <section className="flex justify-around text-white"
            style={{
              backgroundColor: "#F493A6",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 200
            }}>
                {["Todos", "Corpo Inteiro", "Blusas", "Calças","Acessórios"].map((cat)=>(
                  <button key={cat} onClick={()=>setcategoriaFiltro(cat)}>
                    {cat}
                  </button>
                ))}
        
        </section>
    )
}