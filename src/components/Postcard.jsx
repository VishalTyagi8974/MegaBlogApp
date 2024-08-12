import service from "../appwrite/config"
import { Link } from "react-router-dom"

export default function Postcard({ $id, featuredImage, title }) {
    return (
        <>
            <Link to={`/post/${$id}`}>
                <div className="w-100 bg-light rounded-3 p-4">
                    <div className="w-100 d-flex justify-content-center mb-4">
                        <img src={service.getFilePreview(featuredImage)} alt={title} className="rounded" />
                    </div>
                    <h2 className="fs-4 fw-bold">{title}</h2>
                </div>

            </Link>
        </>
    )
}