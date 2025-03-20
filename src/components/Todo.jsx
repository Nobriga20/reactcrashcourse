

function Todo ({ title, paragraph }) {
    function deleteTodo () {

    }
    return (
        <div className="Todo">
            <h2>{ title }</h2>
            <p>{paragraph}</p>
            <button onClick={deleteTodo}>delete</button>
        </div>
    );
} 

export default Todo