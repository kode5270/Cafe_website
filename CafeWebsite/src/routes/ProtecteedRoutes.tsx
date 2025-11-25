import { type ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom";


interface PropsTypes {
    children : ReactNode
}
const ProtectedRoutes = (props : PropsTypes) => {
    const {children} = props;
    const auth = localStorage.getItem('auth');
    const currenRoutes = useLocation().pathname;

    if( !auth && currenRoutes !== '/login'){
        return <Navigate to='/login'/>
    }
    if ( auth && currenRoutes === '/login'){
        return <Navigate to='/orders'/>
    }
    return <>{children}</>
}

export default ProtectedRoutes;