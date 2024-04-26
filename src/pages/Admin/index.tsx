import { Paper, AppBar, Box, Button, Container, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const BaseAdmin = () => {
  return (
    <>
      <AppBar position='static' sx={{ marginBottom: "24px"}}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h6'>
              Administração
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Link component={RouterLink} to='/admin'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Livros
                </Button>
              </Link>
              <Link component={RouterLink} to='/admin/novo'>
                <Button sx={{ my: 2, color: 'white' }}>
                  Novo Livro
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <Container maxWidth='md' sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Outlet />
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default BaseAdmin;
