import { useState } from 'react'
import FormularioFilme from './componentes/FormularioFilme'
import ListaFilmes from './componentes/ListaFilmes'
import Rodape from './componentes/Rodape'
import StatusBar from './componentes/StatusBar'

function App() {
  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [filmes, setFilmes] = useState([
    { nome: 'Breaking Bad', genero: 'Drama' },
    { nome: 'Vingadores: Ultimato', genero: 'Acao' },
  ])

  const nomeAluno = 'Cesar Prando'
  const dataAtual = new Date().toLocaleDateString('pt-BR')

  function adicionarFilme(evento) {
    evento.preventDefault()

    if (nome.trim() === '' || genero.trim() === '') {
      return
    }

    const novoFilme = {
      nome: nome.trim(),
      genero: genero.trim(),
    }

    setFilmes([...filmes, novoFilme])
    setNome('')
    setGenero('')
  }

  return (
    <div className="pagina">
      <StatusBar />

      <main className="conteudo">
        <h1>Lista de Filmes e Series</h1>

        <FormularioFilme
          nome={nome}
          genero={genero}
          setNome={setNome}
          setGenero={setGenero}
          onSubmit={adicionarFilme}
        />
        <ListaFilmes filmes={filmes} />
      </main>

      <Rodape nomeAluno={nomeAluno} dataAtual={dataAtual} />
    </div>
  )
}

export default App
