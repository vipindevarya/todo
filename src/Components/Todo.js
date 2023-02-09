
import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import './Todo.css';


function Todo(props) {
  const [data, setData] = useState([]);
  const addHandler = () => {
    var userValue = document.getElementById('inp').value;
    var inpValue = userValue.trim();
    if (inpValue !== '') {
      const todo = { value: inpValue, isDone: false };
      firebase.database().ref('Todo').push(todo);
      console.log(todo)
      document.getElementById('inp').value = '';
    }
  }
  useEffect(() => {
    firebase.database().ref('Todo').on('value', (snapshot) => {
      const todos = snapshot.val();
      const newData = [];
      for (let element in todos) {
        newData.push({ id: element, ...todos[element] })
      }
      console.log(newData)
      setData(newData);
    })
  }, [])

  const removeHandler = (id) => {
    firebase.database().ref('Todo').child(id).remove();
  }
  const doneHandler = (item) => {
    firebase.database().ref('Todo').child(item.id).update({
      isDone: !item.isDone,
    })

  }

  return (
    <div className='background'>
        <div className='todo'>
        <header>
        <h1>Task List</h1>
        <div className='input-form'>
        <input 
              name='inp' 
              id='inp' 
              className='input'
              placeholder='What do you have planne\'></input>

        <button onClick={addHandler} className=''>Add</button>
        </div>
        </header> 
      <main>
      <h3>Tasks</h3>
      <ul id='list' className=''>

        {
          data.map((item, i) => {
            return (
              <li className='' key={i} style={{ textDecoration: `${item.isDone ? 'line-through' : 'none'}` }}>
                {item.value}
                <div>
                <button onClick={() => removeHandler(item.id)} className=''>X</button>
                <button onClick={() => doneHandler(item)} className=''>-</button>
                </div>
              </li>
            )
          })
        }
      </ul>
      </main>
    </div>
    </div>


  )
}

export default Todo