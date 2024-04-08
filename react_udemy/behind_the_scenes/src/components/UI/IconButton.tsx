import { log } from '../../log';
import {HTMLAttributes, memo} from "react";

type Props = {
    icon: any
} & HTMLAttributes<HTMLButtonElement>;

//Here the function onClick coming from parent (via ...props) changes => the IconButton will be re-rendered.
//It does change, because functions are recreated on parent component change.
//We should wrap them with useCallback and memo() start to work as expected
const IconButton = memo(function IconButton({ children, icon, ...props }: Props) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
