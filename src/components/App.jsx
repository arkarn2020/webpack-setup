import '../styles/index.scss';
import Recipes from './Recipes';
import mushroom from '../images/mushroom.jpg';
import strawberry from '../images/strawberry.jpg';
import grass from '../images/grass.jpg';
import deer from '../images/deer.jpg';
import earth from '../images/earth.svg';

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>oh ohai react</h1>
        </section>
        <img src={mushroom} alt="mushroom in wild" width="250" />
        <Recipes />
      </main>
    </>
  );
}

export default App;
