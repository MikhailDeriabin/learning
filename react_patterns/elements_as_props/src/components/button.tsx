import { cloneElement, ReactElement } from "react";

//This is an implementation of the button with icon, 
//the problem is, that the button is handling the icon displaying 
//and therefore it must forward all props to the icon (size, color, margin etc.) => more complex component to handle and use
//Better solution here is to just provide an icon as a prop with all needed icon configurations 
// type Props = {
//   isLoading: boolean
// }
// const Button = ({ isLoading }: Props) => {
//   return (
//     <button>Submit {isLoading ? <Loading /> : null}</button>
//   );
// };

// export default Button;

//This is a better solution. 
//Here u can add some default props from the button, which will can be overwrite by consumer 
type Props = {
  icon: ReactElement,
  size?: 'large' | 'medium',
  color?: 'primary' | 'secondary'
}
const Button = ({ icon, size, color }: Props) => {
  const defaultProps = {
    size: size === 'large' ? '25px' : '12px',
    color: color === 'secondary' ? 'black' : 'white'
  }

  const newProps = {
    ...defaultProps,
    ...icon.props
  }

  const modifiedIcon = cloneElement(icon, newProps);

  return (
    <button>Submit {modifiedIcon}</button>
  );
};

export default Button;