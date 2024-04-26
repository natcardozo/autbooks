import { IBook } from "../../../interfaces/IBook";

export const calculateTotalPrice = (books: IBook[]) => {
    let sum = 0;

    books.map(book => sum += book.price)

    return sum;
}

export const calculateDiscountPercentage = (books: IBook[]) => {
    const ids: string[] = []
    
    books.forEach(book => ids.push(book.id))

    const uniqueIds = [...new Set(ids)];

    const discountPercentage = 
        uniqueIds.length === 2 ? 0.05 : 
        uniqueIds.length === 3 ? 0.10 :
        uniqueIds.length === 4 ? 0.20 :
        uniqueIds.length > 5 ? 0.25 : 0

    return discountPercentage;
}

export const calculateDiscount = (books: IBook[]) => {
    let sum = 0;

    books.map(book => sum += book.price)

    const discountPercentage = calculateDiscountPercentage(books)

    const discount = sum * discountPercentage;

    return discount
}

export const calculateFinalPrice = (books: IBook[]) => {
    return calculateTotalPrice(books) - calculateDiscount(books)
}
