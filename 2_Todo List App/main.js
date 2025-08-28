
function Button(props) {
    const {title, onClick} = props
    return <button
        onClick={onClick}
        className={title === 'Done' ? 'btnDone' : 'btnDelete'}
    >
        {title}
    </button>
}

function Todo() {
    let uniqId = 0;
    const [inputValue, setInputValue] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [countChecked, setCountChecked] = React.useState(0)

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn trang reload khi submit form
        if (inputValue.trim()) {
            setTodos([...todos, {
                id: ++uniqId, 
                text: inputValue,
                completed: false
            }]);
            setInputValue(''); // Reset input sau khi thêm
        }
    };
    const handleCheck = (index) => {
        setCountChecked(countChecked + 1)
        todos[index].completed = !todos[index].completed
        setTodos([...todos])
    }
    const handleDelete = (index) => {
        todos.splice(index, 1)
        setTodos([...todos])
    }

    return <>
        <div id="myDIV" className="header">
            <div className="container-header">
                <h2 className="title">My To Do List</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Nhập task mới..."
                        type="text"
                        id="myInput" />
                    <button className="btnAdd" type="submit">Add</button>
                </form>

            </div>
        </div>


        <ul id="myUL">
            {
                todos.map((task, index) => (
                    <li className={`task ${task.completed ? 'checked' : ''}`} key={index}>
                        {task.text}
                        <span className="group-btn">
                            <Button onClick={function() {handleCheck(index)}} title='Done' />
                            <Button onClick={function() {handleDelete(index)}} title='Delete' />
                        </span>

                    </li>
                ))
            }
        </ul>
        <div className="resume">
            {
                todos.length > 0    
                ? 
                <p>Tổng: {todos.length} task(s), Hoàn thành: {countChecked} task(s), Còn lại: {todos.length - countChecked} task(s)</p>
                :
                <p>Chưa có task nào. Hãy thêm task đầu tiên!</p>
            }
            
            
        </div>

    </>
}

const app = (
    <Todo />
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)