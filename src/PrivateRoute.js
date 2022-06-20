import React from "react";
import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (      
//         <Route
//             {...rest}
//             render={(props) =>
//                 checkAuth() ? (
//                     <Component {...props} />
//                 ) : (
//                     <Navigate to={{ pathname: "/" }} />
//                 )
//             }
//         />
//     );
// };

const PrivateRoute = ({children }) => {
    return checkAuth() ? children :<Navigate to="/login"/>
};
const checkAuth = () => {
    const token = localStorage.getItem("is_alive");
    return JSON.parse(token);
};
console.log("*****************************",checkAuth())
export default PrivateRoute;
