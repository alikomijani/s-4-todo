import React from 'react'
const CheckBox = ({ name, id, label, onChange, checked }) => {
    return (
        <div>
            <input
                onChange={onChange}
                type="checkbox"
                checked={checked}
                id={id}
                name={name}
            />
            <label style={{
                cursor: "pointer"
            }} htmlFor={id}>{label}</label>
        </div>
    )
}

export default CheckBox
