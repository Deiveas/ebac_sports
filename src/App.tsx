// App.tsx

import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { store } from './store'
import { Provider } from 'react-redux'
import { setProdutos } from './store/reducers/produto'

// Definição do tipo Produto
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res: Produto[]) => {
        store.dispatch(setProdutos(res))
      })
  }, [])

  return (
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
