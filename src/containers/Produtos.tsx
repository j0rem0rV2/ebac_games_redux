import { Game } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { useGetJogosQuery } from '../services/api'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()

  if (isLoading) return <h2> Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
