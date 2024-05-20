import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = ({questions, handleChildData}) => {
    
    const [selectedOptions, setSelectedOptions] = useState("");
    const handleDropdownChange = (questionKey, selectedOption) => {  
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [questionKey]: selectedOption,
        }));
    };

    return (
        <>
            {questions.map((question) => (
                <div key={question.key} className='d-flex mb-3'>
                    {question.question}
                    <div className="dropdown m-1 ms-auto">

                    <button id='question.key' className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                value={selectedOptions[question.key] || "select option"}>
                        {selectedOptions[question.key] || "select option"}
                    </button>

                    <ul className="dropdown-menu">
                            {question.options.map((option) => (
                                    
                                    <li key={option} 
                                        className='dropdown-item ' 
                                        onClick={() => {handleDropdownChange(question.key,option);handleChildData(question.key,option)}}>
                                        {option}
                                    </li>))
                                }
                    </ul>
                    </div>
                    {/* {selectedOptions === '' ? <p style={{ color: 'red' }}>Please select an option.</p> : ''} */}
                </div> 
            ))}
        </>
    );
};

export default Dropdown;
