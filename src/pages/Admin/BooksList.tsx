import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useListOfBooks from "../../state/hooks/useListOfBooks";
import { IBook } from "../../interfaces/IBook";

const BooksList = () => {
  const books: IBook[] = useListOfBooks()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Preço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">R$ {row.price.toFixed(2).replace(".", ",")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BooksList;
