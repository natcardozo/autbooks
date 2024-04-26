import {useState} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { IBook } from "../../interfaces/IBook";
import useListOfCategories from "../../state/hooks/useListOfCategories";

const BooksNew = () => {
  const categories = useListOfCategories();

  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [category, setCategory] = useState(1)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [synopsis, setSynopsis] = useState("")

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const book: IBook = {
        id: uuidv4(),
        name: name,
        author: author,
        category: category,
        price: price,
        image: image,
        synopsis: synopsis
      }

      axios.post("http://localhost:8080/books", book)
        .then(() => {
          setName("")
          setAuthor("")
          setCategory(1)
          setPrice(0)
          setImage("")
          setSynopsis("")
          alert("Livro cadastrado com sucesso!")
        })
        .catch(error => console.error(error))
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: "16px" }}> Adicionar novo livro </Typography>
      <Box component="form" onSubmit={submitForm} autoComplete="off" display={"flex"} flexDirection={"column"} gap={"16px"}>
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Autor"
          variant="outlined"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <TextField 
          id="outlined-select-category" 
          label="Categoria"
          value={category}
          onChange={e => setCategory(Number(e.target.value))}
          select 
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Preço"
          variant="outlined"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
        <TextField
          id="outlined-basic"
          label="Imagem"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Sinopse"
          value={synopsis}
          onChange={e => setSynopsis(e.target.value)}
          multiline
          rows={4}
        />
        <Button variant="contained" type="submit">Adicionar livro</Button>
      </Box>
    </>
  )
}

export default BooksNew;
