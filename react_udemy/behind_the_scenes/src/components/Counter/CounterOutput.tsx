import { log } from '../../log';

type Props = {
  value: number;
}

export default function CounterOutput({ value }: Props) {
  log('<CounterOutput /> rendered', 2);

  const cssClass = value >= 0 ? 'counter-output' : 'counter-output negative';
  return <span className={cssClass}>{value}</span>;
}
