export function Card(props) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <img src={props.imagem} style={{ width: "150px", height: "auto" }} />
      <h3>{props.nome}</h3>
      <h4>categoria: {props.categoria}</h4>
      <p>Descrição: {props.descricao}</p>
    </div>
  );
}
