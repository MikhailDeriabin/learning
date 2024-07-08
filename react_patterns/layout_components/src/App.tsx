import styled from 'styled-components'
import './App.css'
import SplitScreen from './components/SplitScreen'

type TitleProps = {
  title?: string
}

const Left = ({title}: TitleProps) => <h2 style={{backgroundColor: 'crimson'}}>{title}</h2>

const Right = styled.h2`
  background-color: brown;
`;

export default function App() {
  return (
    <>
      <SplitScreen
        leftWidth={1}
        rightWidth={2}
      >
        <Left title="Left"/>
        <Right>Right</Right>
      </SplitScreen>
    </>
  )
}
