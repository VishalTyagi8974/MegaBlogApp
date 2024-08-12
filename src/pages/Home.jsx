import { useEffect, useState } from "react";
import service from "../appwrite/config"
import { Container, Postcard } from "../components"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState("");
    useEffect(() => {
        service.getPosts().then(posts => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])


    if (posts.length === 0) {
        return (
            <div className="w-100 py-3 mt-2 text-center">
                <Container>
                    <div className="d-flex flex-wrap">
                        <div className="p-1 w-100">
                            <h1 className="fs-3 fw-bold">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className='w-100 py-3'>
                <Container>
                    <div className='d-flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-25'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}