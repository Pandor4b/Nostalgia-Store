import Navbar from "../../components/Navbar";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import CheckeredBorder from "../../components/CheckeredBorder";
import { LuCassetteTape } from "react-icons/lu";

const OrderHistory = () => {
    const navigate = useNavigate();
  const { orders } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      searchTerm === "" ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  if (orders.length === 0) {
    return (
      <>
        <Navbar />
        <S.OrderHistoryContainer>
          <S.OrderHistoryContent>
            <S.OrderHistoryHeader>
              <S.OrderHistoryTitle>Histórico de Pedidos</S.OrderHistoryTitle>
              <S.OrderHistorySubtitle>
                Acompanhe suas compras e reviva a nostalgia!
              </S.OrderHistorySubtitle>
            </S.OrderHistoryHeader>
            <S.EmptyState>
              <S.EmptyIcon><LuCassetteTape/></S.EmptyIcon>
              <S.EmptyText>Nenhum pedido ainda!</S.EmptyText>
              <S.EmptySubtext>
                Você ainda não fez nenhuma compra. Que tal começar agora?
              </S.EmptySubtext>
              <S.ShopButton onClick={() => navigate("/")}>
                Ir às Compras
              </S.ShopButton>
            </S.EmptyState>
          </S.OrderHistoryContent>
          <CheckeredBorder />
        </S.OrderHistoryContainer>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <S.OrderHistoryContainer>
        <S.OrderHistoryContent>
          <S.OrderHistoryHeader>
            <S.OrderHistoryTitle>Histórico de Pedidos</S.OrderHistoryTitle>
            <S.OrderHistorySubtitle>
              Acompanhe suas compras e reviva a nostalgia!
            </S.OrderHistorySubtitle>
          </S.OrderHistoryHeader>

          <S.FilterSection>
            <S.FilterLabel>Buscar pedidos:</S.FilterLabel>
            <S.SearchInput
              type="text"
              placeholder="Buscar por ID ou nome do produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.FilterSection>

          <S.OrdersList>
            {filteredOrders.map((order) => (
              <S.OrderCard key={order.id}>
                <S.OrderHeader>
                  <S.OrderInfo>
                    <S.OrderLabel>ID do Pedido</S.OrderLabel>
                    <S.OrderValue>{order.id}</S.OrderValue>
                  </S.OrderInfo>
                  <S.OrderInfo>
                    <S.OrderLabel>Data</S.OrderLabel>
                    <S.OrderValue>{formatDate(order.date)}</S.OrderValue>
                  </S.OrderInfo>
                  <S.OrderInfo>
                    <S.OrderLabel>Total</S.OrderLabel>
                    <S.OrderValue>R$ {order.total?.toFixed(2)}</S.OrderValue>
                  </S.OrderInfo>
                </S.OrderHeader>

                <S.OrderBody>
                  <S.OrderItems>
                    {order.items.map((item) => (
                      <S.OrderItem key={item.id}>
                        <S.ItemImage src={item.image} alt={item.name} />
                        <S.ItemDetails>
                          <S.ItemName>{item.name}</S.ItemName>
                          <S.ItemInfo>Qtd: {item.quantity}</S.ItemInfo>
                        </S.ItemDetails>
                        <S.ItemPrice>
                          {(() => {
                            let priceNum = 0;
                            if (typeof item.price === "string") {
                              priceNum = parseFloat(
                                item.price
                                  .replace(/[^0-9,.-]+/g, "")
                                  .replace(",", ".")
                              );
                            } else {
                              priceNum = Number(item.price);
                            }
                            return `R$ ${(priceNum * item.quantity).toFixed(
                              2
                            )}`;
                          })()}
                        </S.ItemPrice>
                      </S.OrderItem>
                    ))}
                  </S.OrderItems>

                  <S.OrderActions>
                    <S.ActionButton variant="secondary">
                      Ver Detalhes
                    </S.ActionButton>
                  </S.OrderActions>
                </S.OrderBody>
              </S.OrderCard>
            ))}
          </S.OrdersList>
        </S.OrderHistoryContent>
        <CheckeredBorder />
      </S.OrderHistoryContainer>
    </>
  );
};

export default OrderHistory;
