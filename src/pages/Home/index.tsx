import { Play } from 'phosphor-react'
import {
  HomeContainer,
  CountdownContainer,
  FormContainer,
  Sparator,
  Button,
  MinutesInput,
  TextInput,
} from './styles'

export function Home() {
  return (
    <>
      <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TextInput id="task" placeholder="Dê um nome para o projeto" />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesInput type="number" id="minutesAmount" placeholder="00" />

            <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>0</span>
            <span>0</span>
            <Sparator>:</Sparator>
            <span>0</span>
            <span>0</span>
          </CountdownContainer>

          <Button disabled type="submit">
            <Play size={24} />
            Começar
          </Button>
        </form>
      </HomeContainer>
    </>
  )
}
