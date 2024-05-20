import React, { useState } from 'react';

class RadioButton extends React.Component {
    render () {
        return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1" label="radio1">
                    Default radio
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2" label="radio2">
                    Default checked radio
                </label>
            </div>
        </>
        )
    }
}

export default RadioButton;