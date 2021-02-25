import api from "../../index";
import {IPost} from "../../../interfaces/Post.interface"

class PostData {
    index() {
        return api.get<IPost[]>('post');
    }
}
export default new PostData();