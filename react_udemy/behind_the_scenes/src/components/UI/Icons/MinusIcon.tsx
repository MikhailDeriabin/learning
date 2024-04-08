import { log } from '../../../log';
import {HTMLAttributes} from "react";

type Props = {

} & HTMLAttributes<HTMLOrSVGElement>;

export default function MinusIcon(props: Props) {
  log('<MinusIcon /> rendered', 3);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
}
