import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CarContext } from "../Routes/AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(CarContext)
    const location = useLocation()

    if (loading) {
        return <div className='align-items-center text-center mt-5'>
            <div className="radial-progress" style={{ "--value": 0 }}>0%</div>
            <div className="radial-progress" style={{ "--value": 20 }}>20%</div>
            <div className="radial-progress" style={{ "--value": 60 }}>60%</div>
            <div className="radial-progress" style={{ "--value": 80 }}>80%</div>
            <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
        </div>;
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;