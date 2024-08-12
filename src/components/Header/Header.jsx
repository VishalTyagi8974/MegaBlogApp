import { Logo, LogoutBtn, Container } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        }
    ]

    return (

        <header className="py-3 ">
            <Container>
                <nav className=" d-flex">
                    <div className='me-4'>
                        <Link to='/'>
                            <Logo width='70px' />

                        </Link>
                    </div>
                    <ul style={{ listStyleType: 'none' }} className='d-flex mx-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='d-inline-block m-3 px-3 py-1 transition hover:bg-light rounded-pill'

                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li key="logout">
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                </nav>
            </Container>
        </header>
    )
}