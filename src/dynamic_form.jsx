import React, { useState } from 'react';
import Dropdown from './components/Dropdown'
import RadioButton from './components/RadioButton';

const DynamicForm = () => {
  const questions = [
    {key: 'Q1', question: "question 1",options: ['O1','O2']},
    {key: 'Q2', question: "question 2",options: ['O1','O2']},
    {key: 'Q3', question: "question 3",options: ['O1','O2']}
  ]

  const [dataFromChild, setDataFromChild] = useState(null);
  // Callback function to receive data from the child
  const handleChildData = (questionKey,responce) => {
    setDataFromChild((prevDataFromChild) => ({
      ...prevDataFromChild,
      [questionKey]:responce,
    }));
  };

    
const url = "http://localhost:5000"
  const handleSubmit = (e) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataFromChild)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));    
  }

  return (
    <form action='http://localhost:5000/' method='POST' className='row g-1' onSubmit={handleSubmit} encType="application/json">
      <Dropdown questions ={questions} handleChildData={handleChildData}/>
      <RadioButton/>
      <div>
      <button type="submit" value="submit" className='btn btn-primary align-center'>Submit</button>
      </div>
    </form>
  );
}

export default DynamicForm;
