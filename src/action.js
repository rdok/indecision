import React from "react"

export const Action = ({hasOptions, handleTodoSuggestion, suggestedToDo}) => (
    <div>
        <button
            disabled={!hasOptions}
            onClick={handleTodoSuggestion}
        >
            What should I do?
        </button>
        {suggestedToDo && <p>{suggestedToDo}</p>}
    </div>
)
