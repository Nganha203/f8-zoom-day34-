// const data = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//         geo: {
//             lat: "-37.3159",
//             lng: "81.1496"
//         }
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//         name: "Romaguera-Crona",
//         catchPhrase: "Multi-layered client-server neural-net",
//         bs: "harness real-time e-markets"
//     }
// }

function Profile() {
    const [user, setUser] = React.useState({})
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.json())
            .then((user) => {
                setUser(user)
            })
    }, [])

    return <>
        <div className="wrapper">
            <div className="container">
                <img src="https://i.otakul.com/11865/DSC_5071.jpg" alt="" className="profile-img" />

                <div className="content">
                    <div className="sub-content">
                        <h1>{user.name}</h1>
                        <p>{user.username}</p>
                        <a href="http://www.rogerfederer.com/">{user.email}</a>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>
                    <div className="address">

                        <p>Street: {user.address?.street}</p>
                        <p>City: {user.address?.city}</p>

                    </div>
                    <div className="btn">follow me</div>
                </div>
            </div>
        </div>

    </>
}

const app = (
    <Profile />
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)