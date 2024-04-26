import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cartOpenState } from "../state/atom";
import useListOfCategories from "../state/hooks/useListOfCategories";
import styles from "./DefaultPage.module.scss";
import ShoppingCart from "../components/Cart";
import Footer from "../components/Footer";

const DefaultPage = () => { 
  const categories = useListOfCategories();

  const [cartOpen, setCartOpen] = useRecoilState(cartOpenState)

  return (
    <>
      <header>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logotipo da Autbooks" />
        </div>
        <Paper elevation={0} sx={{ backgroundColor: "#FAD02C" }}>
          <nav className={styles.navigation}>
            <ul className={styles.navigation__list}>
              <li>
                <a href="">Início</a>
              </li>
              {categories.map(cat => (
                <li key={cat.value}>
                  <a href="">{cat.label}</a>
                </li>
              ))}
            </ul>
            <input type="text" className={styles.navigation__searchBar} placeholder="Pesquisar" />
            <ShoppingCartIcon 
              color='primary' 
              className={styles.navigation__cart} 
              onClick={() => setCartOpen(!cartOpen)}
            />
          </nav>
        </Paper>
      </header>
      <Outlet />
      <ShoppingCart />
      <Footer />
    </>
  )
}

export default DefaultPage;
