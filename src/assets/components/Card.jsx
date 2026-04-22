export function Card({ itensFiltrados }) {
  return (
    <>
      {itensFiltrados.map((el) => (
        <div
          className="flex flex-col align-center justify-center p-4 shadow-2xl"
          key={el.id}
        >
          <img src={el.imagem} alt={el.nome} />
          <h3>{el.nome}</h3>
          <h4>Categoria: {el.categoria}</h4>
          <p>Descrição: {el.descricao}</p>

          {el.tamanhos && (
            <div className="flex gap-1 mt-2 flex-wrap">
              {el.tamanhos.map((t) => (
                <span
                  key={t}
                  className="text-xs border border-pink-300 rounded px-2 py-0.5 text-pink-600"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {el.tecido && (
            <p className="text-xs text-purple-600 mt-1">Tecido: {el.tecido}</p>
          )}
        </div>
      ))}
    </>
  );
}
