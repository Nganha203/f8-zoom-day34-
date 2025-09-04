
function Modal(props) {
    const { id, body, isOpen, handleClose } = props
    return (

        <div className={`container-modal ${isOpen ? '' : 'hide'}`}>
            <div className="modal">
                <span onClick={handleClose} className="icon-close">❌</span>
                <p>ID: {id}</p>
                <p>{body}</p>
            </div>
        </div>


    )


}

function ProductList() {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [id, setId] = React.useState(null)
    const [body, setBody] = React.useState(null)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })

    }, [])

    if (loading) {
        return <p>Đang tải dữ liệu...</p>
    }
    function handleOpenModal(id, body) {
        setId(id)
        setIsOpen(!isOpen)
        setBody(body)
    }
    function handleClose() {
        setIsOpen(!isOpen)
    }
    function CompactText(body){
        if(!body){
            return ""
        }
        return body.length > 100 ? body.slice(0, 100) + '...' : body
    }
    function capitalizeFirstLetter(title){
        if(!title){
            return ""
        }
        return title.charAt(0).toUpperCase() + title.slice(1)
    }

    return (
        <div className="container">
            <div className="product-container">
                {
                    products.map((product) => (

                        <div className="product" key={product.id}>
                            <div className="product-content">
                                <p>ID: {product.id}</p>
                                <p>Title: {capitalizeFirstLetter(product.title)}</p>
                                <p>Body: {CompactText(product.body)}</p>
                                <button onClick={() => handleOpenModal(product.id, product.body)} className="btn-detail">Xem chi tiết</button>
                            </div>

                        </div>

                    ))
                }
            </div>
            <Modal id={id} isOpen={isOpen} body={body} handleClose={handleClose} />
        </div>
    )
}

const app = (
    <ProductList />
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(app)