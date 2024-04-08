import { useState } from 'react';
import { log } from '../../log';

type ItemProps = {
  count: number;
}

function HistoryItem({ count }: ItemProps) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

type HistoryProps = {
  history: number[];
}

export default function CounterHistory({ history }: HistoryProps) {
  log('<CounterHistory /> rendered', 2);

  //React maps all the components in the DOM using key property,
  // so it can understand what component is what and know which state belongs to which component.
  //Here the key is the index of the element in an array and because of that, when u'r adding pressing increment btn the new item is added to the array
  //if u did press that element earlier, and it was highlighted u can see that after u press btn again the wrong element will be highlighted.
  //Because u'r telling the React to differentiate items by array index => if the second elem was highlighted the second will be highlighted after u press the btn.
  //Also, when u'r using the key as array index, each time the array changes the whole list is re-rendered, not only one item
  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
