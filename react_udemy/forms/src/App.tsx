import Header from './components/Header';
import LoginUsingState from './components/LoginUsingState';
import Signup from "./components/Signup";
import LoginUsingRefs from "./components/LoginUsingRefs";

function App() {
  return (
    <>
      <Header />
      <main>
          {/*<LoginUsingRefs />*/}
        <LoginUsingState />
        {/*  <Signup/>*/}
      </main>
    </>
  );
}

export default App;
