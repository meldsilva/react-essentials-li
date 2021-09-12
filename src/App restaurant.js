import './App.css';

function Header({name}) {
  return(
    <header>
    <h1>{name}</h1>
    </header>
  );
}
function Main(props) {
  return(
    <section>
    <p>We serve the most {props.adjective} food!</p>
    <img src="https://github.com/meldsilva.png" height={200} alt="Dookie pic"/>
    <ul style={{ textAlign: "left" }}>
      {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li> )}
    </ul>
    </section>
  );
}
function Footer({year}) {
  return(
    <footer>
      <p>Copyright: {year}</p>
    </footer>
    
  );
}

const dishes = [
  "Mac n Cheese",
  "Eggs Benedict",
  "Paneer Burjhi",
  "Paneer Masala",
  "Haleem"
]

const dishObjects = dishes.map( (dish,i) => ( { id: i, title: dish}) );
// console.log(dishObjects);

function App() {
  return (
    <div className="App">
      <Header name="Mel's Diner"/>
      <Main 
        adjective="amazing"
        dishes = {dishObjects}
      />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
