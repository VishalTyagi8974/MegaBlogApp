import { useState } from "react";
import { Button, Logo, Input } from "./index";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";


export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(storeLogin(userData));
                    navigate("/");
                }
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
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center fs-6 text-muted">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="fw-medium text-primary"
                        style={{ transition: 'all 0.2s', textDecoration: 'underline' }}
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-danger mt-4 text-center">{error}</p>}

                <form action="" className="mt-4" onSubmit={handleSubmit(login)}>
                    <div className="my-3">

                        <Input label="Email: "
                            placeholder="Enter Your Email"
                            type="email"
                            {...register("email", {
                                required: true, validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />

                        <Input label="Password: "
                            placeholder="Enter Your Password"
                            type="password"
                            {...register("password", { required: true })}
                        />

                        <Button type="submit" className="w-100">
                            Sign In
                        </Button>

                    </div>
                </form>

            </div>

        </div>
    )
}