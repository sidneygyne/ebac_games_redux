import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  // const [games, setGames] = useState<Game[]>([])
  // // const [carrinho, setCarrinho] = useState<Game[]>([])
  // // a linha acima foi transformada em reducer

  // useEffect(() => {
  //   fetch('http://localhost:4000/produtos')
  //     .then((res) => res.json())
  //     .then((res) => setGames(res))
  // }, [])

  return (
    //coloca o provider em vez <>
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
