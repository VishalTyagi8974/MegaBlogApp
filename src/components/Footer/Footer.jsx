import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="position-relative overflow-hidden py-5 bg-secondary border border-top border-top-2 border-dark">
            <div className="position-relative z-10 mx-auto container ">
                <div className="row">
                    <div className="col-12 p-3 col-md-6 col-lg-5">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <div className="mb-4 d-inline-flex align-items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-muted small">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-2">
                        <div className="h-100">
                            <h3 className="text-uppercase text-muted small mb-3">
                                Company
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-2">
                        <div className="h-100">
                            <h3 className="text-uppercase text-muted small mb-3">
                                Support
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 p-3 col-md-6 col-lg-3">
                        <div className="h-100">
                            <h3 className="text-uppercase text-muted small mb-3">
                                Legals
                            </h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-dark font-weight-medium text-decoration-none hover:text-secondary" to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer           