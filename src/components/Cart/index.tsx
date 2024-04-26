import { Button, Drawer } from "@mui/material";
import { cartOpenState } from "../../state/atom";
import { useRecoilState } from "recoil";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Item from "./Item";
import "./Cart.css";

const ShoppingCart = () => {
  const [cartOpen, setCartOpen] = useRecoilState(cartOpenState)

  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      transitionDuration={500}
      onClose={() => setCartOpen(false)}
    >
      <div className="cart">
        <div className="cart__header">
          <h3>Meu carrinho</h3>
          <CloseRoundedIcon cursor="pointer" fontSize="large" onClick={() => setCartOpen(false)} />
        </div>
        <Item />
        <Item />
        <div className="total">
          <div className="total__item">
            <p>Subtotal</p>
            <span>R$ 40,00</span>
          </div>
          <div className="total__item">
            <p>Desconto</p>
            <span>R$ 40,00</span>
          </div>
          <div className="total__item">
            <p>Total</p>
            <span>R$ 40,00</span>
          </div>
        </div>
        <Button color="secondary" variant="contained" size="large" fullWidth >
          Finalizar compra
        </Button>
      </div>
    </Drawer>
  );
}

export default ShoppingCart;
