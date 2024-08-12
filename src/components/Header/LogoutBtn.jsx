import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth"


export default function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        await authService.logout()
        dispatch(logout());
    }

    return (
        <button className="d-inline-block px-3 py-2 transition rounded-pill hover:bg-lightblue" onClick={logoutHandler}>Logout</button>
    )
}