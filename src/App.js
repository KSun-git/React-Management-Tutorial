import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id' : 'kch',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '김철수',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 'kyh',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '김영희',
    'birthday' : '960305',
    'gender' : '여자',
    'job' : '프로그래머'
  }
]

class App extends Component{
  render() {
    return (
      <div>
        {/*
        <Customer 
          id={customer[0].id}
          image={customer[0].image}
          name={customer[0].name}
          birthday={customer[0].birthday}
          gender={customer[0].gender}
          job={customer[0].job}
        />
        <Customer 
          id={customer[1].id}
          image={customer[1].image}
          name={customer[1].name}
          birthday={customer[1].birthday}
          gender={customer[1].gender}
          job={customer[1].job}
        />
        */}
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
      }
      </div>
    );
  }
}

{/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/}

export default App;
