import { useState } from 'react';
// import Card from '../Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';



const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle('updated !');
    // };

    return (
        <li className=''>
            <div className='expense-item'>
                <div className='expense-item'>
                    <ExpenseDate date={props.date} />

                    <div className='expense-item__description'>
                        <h2>{props.title}</h2>
                        <div className='expense-item__price'>${props.amount}</div>
                    </div>

                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
        </li>
    );
}
export default ExpenseItem;