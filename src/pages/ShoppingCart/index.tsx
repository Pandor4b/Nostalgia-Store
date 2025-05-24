import { useCart } from "../../hooks/useCart";
import * as S from "./styles";
import Navbar from "../../components/Navbar";
import CheckeredBorder from "../../components/CheckeredBorder";
import { LuShoppingCart, LuTrash2, LuMinus, LuPlus   } from "react-icons/lu";


const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart, checkout } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(",", ".")) * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <S.CartContainer>
        <Navbar />
        <S.CartContent>
          <S.CartHeader>
            <S.CartTitle>Seu Carrinho de Compras</S.CartTitle>
          </S.CartHeader>
          <S.EmptyCart>
            <S.EmptyCartIcon>
              < LuShoppingCart />
            </S.EmptyCartIcon>
            <S.EmptyCartText>Seu carrinho está vazio!</S.EmptyCartText>
            <S.ShopNowButton onClick={() => (window.location.href = "/")}>
              Ir as Compras
            </S.ShopNowButton>
          </S.EmptyCart>
        </S.CartContent>
        <CheckeredBorder />
      </S.CartContainer>
    );
  }

  return (
    <S.CartContainer>
      <Navbar />
      <S.CartContent>
        <S.CartHeader>
          <S.CartTitle>Seu Carrinho de Compras</S.CartTitle>
        </S.CartHeader>

        <S.CartLayout>
          <S.CartItems>
            <S.CartItemsTitle>
              Seus items no carrinho ({cartItems.length})
            </S.CartItemsTitle>
            {cartItems.map((item) => (
              <S.CartItem key={item.id}>
                <S.ItemImage src={item.image} alt={item.name} />
                <S.ItemDetails>
                  <S.ItemName>{item.name}</S.ItemName>
                  <S.ItemPrice>R$ {item.price}</S.ItemPrice>
                </S.ItemDetails>
                <S.QuantityControls>
                  <S.QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <LuMinus />
                  </S.QuantityButton>
                  <S.QuantityDisplay>{item.quantity}</S.QuantityDisplay>
                  <S.QuantityButton
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <LuPlus />
                  </S.QuantityButton>
                </S.QuantityControls>
                <S.RemoveButton onClick={() => removeFromCart(item.id)}>
                  < LuTrash2/>
                </S.RemoveButton>
              </S.CartItem>
            ))}
          </S.CartItems>

          <S.CartSummary>
            <S.SummaryTitle>Resumo do Pedido</S.SummaryTitle>
            <S.SummaryRow>
              <span>Subtotal:</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </S.SummaryRow>
            <S.SummaryRow>
              <span>Frete:</span>
              <span>{shipping === 0 ? "GRÁTIS" : `£${shipping.toFixed(2)}`}</span>
            </S.SummaryRow>
            {shipping === 0 && (
              <S.SummaryRow style={{ fontSize: "14px", color: "#666" }}>
                <span> Frete grátis para comrpas acima de R$50</span>
                <span></span>
              </S.SummaryRow>
            )}
            <S.SummaryTotal>
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </S.SummaryTotal>

            <S.CheckoutButton>Finalizar Pedido</S.CheckoutButton>
            <S.ContinueShoppingButton
              onClick={checkout}
            >
              Voltar as Compras
            </S.ContinueShoppingButton>
          </S.CartSummary>
        </S.CartLayout>
      </S.CartContent>
      <CheckeredBorder />
    </S.CartContainer>
  );
};

export default ShoppingCart;
