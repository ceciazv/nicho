import {useRouter } from "next/router";
import { useEffect, useState } from "react";
import {FaHome} from "react-icons/fa";
import { formatWithOptions } from "util";
import {apiPost} from "../../api/data";
import { Link } from "../../styles";
import {IPost} from "../../interfaces/Post.interface"
import { Container } from "./styles";


const Header = () => {
    const router = useRouter();
    const [post, setPost] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async() => {
            const response = await apiPost.index();
            setPost(response.data);
          
        }
        fetchData();
    }, [])

    return (
     <Container className="container">
          <FaHome onClick ={() => router.push("/")} />
        {post && post.map((item)=>(
            <Link key={item.id} href={`/$item.id}`}>
                {item.nome}
            </Link>
    ))}

     </Container>
    );
};


export default Header;
