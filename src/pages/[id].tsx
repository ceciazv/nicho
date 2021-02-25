import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Header } from "../componentes"
import { apiLivros } from "../api/data/index";
import { apiPost } from "../api/data/index";
import { ILivros } from "../interfaces/Livro.interface";
import { toast } from "react-toastify";
import { FaChromecast } from "react-icons/fa";

export default function Home() {
    const [livros, setLivros] = useState<ILivros[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await apiLivros.show();
                if (response.data.length === 0) {
                    toast.error('Não há nenhum livro cadastrado');
                }
                setLivros(response.data);
            } catch (error) {
                toast.error('Erro na chamada');
            } finally {
            }
        };
        if (router.query.id) {
            fetchData();
        }
    }, [router.query.id]);
    return (
        <>
            <Header />
            <div className="container">
                <head>
                    <h2>
                        Postagens Recentes
                                </h2>
                </head>
                <body>
                    {
                        livros && livros.map((item) => (
                            <tr key={item.id}>
                                <td> {item.nome}</td>
                                <td>{item.autor}</td>
                                <td>{item.editora}</td>
                                <td>{item.genero_id}</td>
                            </tr>
                        ))
                    }
                </body>
            </div>
        </>
    );
}