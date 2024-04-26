import { useRecoilValue } from "recoil";
import { booksAsync } from "../selectors";

const useListOfBooks = () => {
    return useRecoilValue(booksAsync);
}

export default useListOfBooks;