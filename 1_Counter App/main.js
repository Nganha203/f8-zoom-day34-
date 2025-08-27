
function Button(props) {
    return <button
        onClick={props.onClick}
    >{props.feature}</button>
}
function Counter() {
    const [count, setCount] = React.useState(0)
    return <>
        <div className="cover-counter">
            <h1 className={count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'}>{count}</h1>
            <div className="group-btn">
                <Button onClick={function () { setCount(count + 1) }} feature='+' />
                <Button onClick={function () { setCount(0) }} feature='Reset' />
                <Button onClick={function () { setCount(count - 1) }} feature='-' />
            </div>

        </div>

    </>
}
const app = (
    <Counter />
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)