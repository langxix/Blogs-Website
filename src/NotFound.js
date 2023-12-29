import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2> Sorry </h2>
            <p> Page cannot be found </p>
            <Link to = '/' > Back to HomePage..... </Link>
        </div>
    )
}  

export default NotFound;