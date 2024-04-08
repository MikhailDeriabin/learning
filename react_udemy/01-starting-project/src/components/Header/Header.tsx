import  headerImg from '../../assets/react-core-concepts.png';
import './Header.css';

export const Header = () => {

    function getRandomDescription() {
        const descriptions = ['Fundamental', 'Crucial', 'Core'];
        return descriptions[Math.floor(Math.random()*descriptions.length)];
    }

    return (
      <header>
          <img src={headerImg} alt="Stylized atom"/>
          <h1>React Essentials</h1>
          <p>
              {getRandomDescription()} React concepts you will need for almost any app you are
              going to build!
          </p>
      </header>
    );
}