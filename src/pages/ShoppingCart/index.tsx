import { useCart } from "../../hooks/useCart";
import * as S from "./styles";
import Navbar from "../../components/Navbar";
import CheckeredBorder from "../../components/CheckeredBorder";
import { LuShoppingCart, LuTrash2, LuMinus, LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import RoundButton from "../../components/RoundButton";

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart, checkout } = useCart();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(",", ".")) * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <S.CartContainer>
      <Navbar />
      <S.CartContent>
        <S.CartHeader>
          <S.CartTitle>Seu Carrinho de Compras</S.CartTitle>
          <S.CartSubtitle>
            Pronto para tornar a nostalgia realidade?
          </S.CartSubtitle>
        </S.CartHeader>

        {cartItems.length === 0 ? (
          <S.EmptyCart>
            <S.EmptyCartIcon>
              <LuShoppingCart />
            </S.EmptyCartIcon>
            <S.EmptyCartText>Seu carrinho está vazio!</S.EmptyCartText>
            <S.EmptyCartSubtext>
              Parece que você ainda não adicionou nenhum item ao seu carrinho.
              Vamos encontrar algo incrível para você!
            </S.EmptyCartSubtext>
            <RoundButton color="coral" onClick={() => navigate("/")}>
              Ir às Compras
            </RoundButton>
          </S.EmptyCart>
        ) : (
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
                    <LuTrash2 />
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
                <span>
                  {shipping === 0 ? "GRÁTIS" : `R$${shipping.toFixed(2)}`}
                </span>
              </S.SummaryRow>
              {shipping === 0 && (
                <S.SummaryRow>
                  <span className="spanFee">
                    {" "}
                    Frete grátis para comrpas acima de R$50
                  </span>
                </S.SummaryRow>
              )}
              <S.SummaryTotal>
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </S.SummaryTotal>

              <RoundButton color="green" fullWidth onClick={checkout}>
                Finalizar Pedido
              </RoundButton>
              <RoundButton
                variant="outline"
                fullWidth
                onClick={() => navigate("/")}
              >
                Voltar as Compras
              </RoundButton>
            </S.CartSummary>
          </S.CartLayout>
        )}
      </S.CartContent>
      <CheckeredBorder />
    </S.CartContainer>
  );
};

export default ShoppingCart;
