import { useRecoilValue } from "recoil";
import { categoriesState } from "../atom";

const useListOfCategories = () => {
    return useRecoilValue(categoriesState);
}

export default useListOfCategories;