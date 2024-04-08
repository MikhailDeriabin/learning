import logo from '../assets/logo.png';
import s from './header.module.css';

export default function Header() {
    const someBool = true;

  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
          // Conditional inline styles
          style={{
              backgroundColor: someBool ? 'red' : 'white'
          }}
      >
          A community of artists and art-lovers.
      </p>

        <p
            // Conditional css class
            className={`label ${someBool ? 'valid' : 'invalid'}`}
        > Some text here</p>

        <p
            // css class from module
            className={s.myClass}
        >
            CSS module
        </p>
    </header>
  );
}
