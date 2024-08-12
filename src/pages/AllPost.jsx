import { useEffect, useState } from "react";
import service from "../appwrite/config"
import { Postcard, Container } from "../components"


export default function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        service.getPosts().then(posts => {
            if (posts) {
                setPosts(posts.documents)
            }
        });
    })

    return (
        <div className="w-100 py-3">
            <Container>
                <div className=" d-flex flex-wrap">
                    {
                        posts?.map(post => (
                            <div className="p-1 w-25" key={post.$id}>
                                <Postcard post={{ ...post }} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}