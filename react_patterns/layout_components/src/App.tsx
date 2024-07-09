import styled from 'styled-components'
import './App.css'
import SplitScreen from './components/SplitScreen'
import RegularList from './components/ListsExample/RegularList'
import { authors } from './data/authors'
import SmallAuthorListItem from './components/ListsExample/authors/SmallAuthorListItem'
import LargeAuthorListItem from './components/ListsExample/authors/LargeAuthorListItem'
import SmallBookListItem from './components/ListsExample/books/SmallBookListItem'
import { books } from './data/books'
import LargeBookListItem from './components/ListsExample/books/LargeBookListItem';
import Modal from './components/Modal'

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
      <div>
        <h2>Modal example</h2>
        <Modal>
          <SplitScreen leftWidth={1} rightWidth={2}>
            <Left title="Left"/>
            <Right>Right</Right>
          </SplitScreen>
        </Modal>
      </div>
      <p>#################################################################</p>

      <div>
        <h2>Split Screen example</h2>
        <SplitScreen leftWidth={1} rightWidth={2}>
          <Left title="Left"/>
          <Right>Right</Right>
        </SplitScreen>
      </div>
      <p>#################################################################</p>
      
      <div>
        <h2>Lists example</h2>
        <h3>SmallAuthorListItem</h3>
        <RegularList
          items={authors}
          sourceName='author'
          ItemComponent={SmallAuthorListItem}
        />  
        <p>----------------------------------------------------</p>

        <h3>LargeAuthorListItem</h3>
        <RegularList
          items={authors}
          sourceName='author'
          ItemComponent={LargeAuthorListItem}
        />
        <p>----------------------------------------------------</p>

        <h3>SmallBookListItem</h3>
          <RegularList
            items={books}
            sourceName='book'
            ItemComponent={SmallBookListItem}
          />
          <p>----------------------------------------------------</p>

          <h3>LargeBookListItem</h3>
          <RegularList
            items={books}
            sourceName='book'
            ItemComponent={LargeBookListItem}
          />
      </div>
    </>
  )
}
