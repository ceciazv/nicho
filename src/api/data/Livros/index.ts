import api from "../../index";
import {ILivros} from "../../../interfaces/Livro.interface"

class LivroData {
    show() {
        return api.get<ILivros[]>('livros');
    }
}
export default new LivroData();