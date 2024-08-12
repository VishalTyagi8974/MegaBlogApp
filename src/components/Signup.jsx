import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";



export default function Signup() {
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const signup = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="d-flex justify-content-center w-100 align-items-center">
            <div className="mx-auto w-100 mw-100 bg-light rounded-3 p-4 border border-secondary">
                <div className="mb-2 d-flex justify-content-center">
                    <span className="d-inline-block w-100" style={{ maxWidth: '100px' }}>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center fs-3 fw-bold">
                    Sign up for new Account
                </h2>
                <p className="mt-2 text-center fs-6 text-muted">
                    Do have an account?&nbsp;
                    <Link
                        to="/login"
                        className="fw-medium text-primary"
                        style={{ transition: 'all 0.2s', textDecoration: 'underline' }}
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-danger mt-4 text-center">{error}</p>}
                <form action="" className="mt-4" onSubmit={handleSubmit(signup)}>
                    <div className="my-3">
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input label="Email: " type="email" placeholder="Enter your Email" {...register("email", {
                            required: true, validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        })} />

                        <Input label="Password: " type="password" placeholder="Create a Password" {...register("password", {
                            required: true
                        })} />

                        <Button type="submit" className="w-100"> Sign Up</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}