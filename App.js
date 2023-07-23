import React, { useState } from 'react';
import Expenses from './Components/Expense/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2021, 1, 28),

    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 21), },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2022, 5, 22),

    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 10, 13),

    },
];


const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        })
    }

    return (
        <div>

            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />

        </div >
    );
}
export default App;