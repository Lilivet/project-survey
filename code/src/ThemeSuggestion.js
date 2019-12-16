import React from 'react'


export const ThemeSuggestion = (props) => (
    <div className="suggestion">
        <label>
            {props.label}
            <input
                type="text"
                value={props.value}
                onChange={(event) => props.setValue(event.target.value)} />
        </label>
    </div>
)