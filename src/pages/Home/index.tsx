import { Play } from 'phosphor-react'
import {
  HomeContainer,
  CountdownContainer,
  FormContainer,
  Sparator,
} from './styles'

export function Home() {
  return (
    <>
      <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <input id="task" />

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" />

            <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Sparator>:</Sparator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <button type="submit">
            <Play size={24} />
            Começar
          </button>
        </form>
      </HomeContainer>
    </>
  )
}
