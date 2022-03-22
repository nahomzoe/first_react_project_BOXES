import "./App.css";
import Header from "./Header";
import Main from "./Box";
import Footer from "./Footer";

const persons = [
  {
    name: "Solomon",
    title: "CEO",
    age: 29,
    Langusges: [
      { name: "engilish", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
  {
    name: "David",
    title: "Developer",
    age: 26,
    Langusges: [
      { name: "engilish", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
  {
    name: "Maria",
    title: "Designer",
    age: 10,
    Langusges: [
      { name: "engilish", id: 1 },
      { name: "Finnish", id: 2 },
      { name: "Swedish", id: 3 },
    ],
  },
];
const Box = (props) => {
  return (
    <div class="box">
      <h2>{props.name}</h2>
      <p>Title:{props.title}</p>
      <p>Age:{props.age}</p>
      <ul>{props.lang}</ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {persons.map((person) => (
          <Box
            key={person.name}
            name={persons[0].name}
            title={persons[0].title}
            age={persons[0].age}
            lang={person.Langusges.map((lang) => (
              <li key={lang.id}> {lang.name}</li>
            ))}
          />
        ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
