import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'
import produtoReducer from './reducers/produto' // Importação do reducer de produto

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    produto: produtoReducer // Adição do reducer de produto
  }
})

export type RootReducer = ReturnType<typeof store.getState>
