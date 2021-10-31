import React from "react";

export const Action = ({ hasOptions, handleTodoSuggestion, suggestedToDo }) => (
  <div>
    <button
      disabled={!hasOptions}
      onClick={handleTodoSuggestion}
      className="big-button"
    >
      What should I do?
    </button>
    {suggestedToDo && <p>{suggestedToDo}</p>}
  </div>
);
