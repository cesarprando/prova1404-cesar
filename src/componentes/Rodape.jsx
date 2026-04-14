function Rodape({ nomeAluno, dataAtual }) {
  return (
    <footer className="rodape">
      <p>
        {nomeAluno} | {dataAtual}
      </p>
    </footer>
  )
}

export default Rodape
