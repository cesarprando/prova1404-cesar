function ListaFilmes({ filmes }) {
  return (
    <section className="lista">
      <h2>Filmes/Series cadastrados</h2>

      {filmes.length === 0 ? (
        <p>Nenhum item cadastrado.</p>
      ) : (
        <ul>
          {filmes.map((filme, index) => (
            <li key={`${filme.nome}-${index}`}>
              <strong>{filme.nome}</strong> - {filme.genero}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaFilmes
