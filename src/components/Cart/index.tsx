import { Button, Drawer } from "@mui/material";
import { cartOpenState, shoppingCartState } from "../../state/atom";
import { useRecoilState, useRecoilValue } from "recoil";

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Item from "./Item";
import "./Cart.css";

import { calculateDiscount, calculateFinalPrice, calculateTotalPrice } from "./helpers/priceCalculator";

const ShoppingCart = () => {
  const [cartOpen, setCartOpen] = useRecoilState(cartOpenState)

  const cart = useRecoilValue(shoppingCartState);

  const totalPrice = calculateTotalPrice(cart.books);
  const discount = calculateDiscount(cart.books);
  const finalPrice = calculateFinalPrice(cart.books);

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
        {cart.books.map(book => <Item {...book} key={book.id} />)}
        {cart.books.length > 0 ? (
          <>
            <div className="total">
              <div className="total__item">
                <p>Subtotal</p>
                <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="total__item">
                <p>Desconto</p>
                <span>R$ {discount.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="total__item">
                <p>Total</p>
                <span>R$ {finalPrice.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
            <Button color="secondary" variant="contained" size="large" fullWidth >
              Finalizar compra
            </Button>
          </>
        ) : <>Seu carrinho está vazio</>}
      </div>
    </Drawer>
  );
}

export default ShoppingCart;
