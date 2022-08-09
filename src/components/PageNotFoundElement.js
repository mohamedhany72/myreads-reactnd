import { Link } from "react-router-dom";

const PageNotFoundElement = () => {
    return (
        <div>
            <pre>404 Page not Found</pre>
            <Link to="/">Go To Main Page</Link>        
        </div>
    )
}

export default PageNotFoundElement;