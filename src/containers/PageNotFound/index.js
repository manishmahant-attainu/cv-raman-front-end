import { Link, Redirect } from "react-router-dom";
import { PATHS } from "../../config/webPath";

const PageNotFound = () => {
    return (
        <>
            <h1>Oops!! You landed on non-existent page</h1>
            <p>click <Link to={PATHS.HOME}>here</Link> to go to home</p> 
            <Redirect to={PATHS.HOME}/>
        </>
    )
}

export default PageNotFound;
