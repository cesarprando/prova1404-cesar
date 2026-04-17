function FormularioFilme({ nome, genero, setNome, setGenero, onSubmit }) {
  return (
    <form className="formulario" onSubmit={onSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite o nome do filme ou serie"
      />

      <label htmlFor="genero">Genero</label>
      <input
        id="genero"
        type="text"
        value={genero}
        onChange={(evento) => setGenero(evento.target.value)}
        placeholder="Digite o genero"
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default FormularioFilme
