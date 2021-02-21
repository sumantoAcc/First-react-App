import React from 'react';
export default function Todo({ x ,  timePass}) {
    function handleTodoClick(){
        timePass(x.id);
    }
    return (
        <div>
            <label >
                <input type="checkbox" checked = {x.complete}
                onChange = {handleTodoClick} />
                {x.name}
            </label>
        </div>
    );
}
