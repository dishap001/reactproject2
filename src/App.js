import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Concept from './Concept/Concept';
//import ExpenseForm from './NewExpense/ExpenseForm';
import NewExpense from './NewExpense/NewExpense';
import Expenses from './NewExpense/Expenses';

const initialExpenseTypes = [
  {
    id:'e1',
    title: 'Car Insurance',
    amount: 34234,
    date: new Date(2021, 2, 23),
  },
  {
    id:'e2',
    title: 'Home Insurance',
    amount: 550,
    date: new Date(2021, 5, 15),
  },
  {
    id:'e3',
    title: 'Health Insurance',
    amount: 500,
    date: new Date(2021, 7, 10),
  }
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenseTypes);

  const concepts = [
    {
      title: 'Components',
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions get executed for which event.',
    },
  ];

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {return [expense,...prevExpenses]});
  };

  // (prevExpenses) => (return [...prevExpenses, expense])
  return (
    <div className="App">
      <h1>Mini Project 1</h1>
      <NewExpense onAddExpense={onAddExpenseHandler} />
    <Expenses items={expenses}/>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        
      ))}
      
      <div>
        <header>
          <h1>Mini Project 2</h1>
          <h2>Key React Concepts</h2>
          <p>Selected key react concepts you should know about</p>
        </header>
        <ul id="concepts">
          <Concept
            title={concepts[0].title}
            description={concepts[0].description}
          />
          <Concept
            title={concepts[1].title}
            description={concepts[1].description}
          />
          <Concept
            title={concepts[2].title}
            description={concepts[2].description}
          />
        </ul>
      </div>
    </div>
  );
  }

export default App;
