import classes from './Card.module.css';
import {ReactNode} from "react";

type Props = {
  children?: ReactNode,
  className?: string,
}

const Card = ({ children, className }: Props) => {
  return (
    <section
      className={`${classes.card} ${className ? className : ''}`}
    >
      {children}
    </section>
  );
};

export default Card;
