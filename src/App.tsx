import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Gera Zoltán",
      url: "https://static.starity.hu/images/celebs/200x300/gera-zoltan-061614660761043664.jpg",
      age: 42,
      note: "Nicknames: Gerzson, Magical Magyar"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
