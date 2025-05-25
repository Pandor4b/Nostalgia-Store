import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import RetantugarButton from "../RetangularButton";
import Modal from "../Modal";

export type ProductCardProps = {
  key: number;
  name: string;
  price: string;
  image: string;
  id: number;
};

const ProductCard = ({ key, name, price, image, id }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart, showModal, setShowModal, lastAddedItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    let priceString: string;
    if (typeof price === "number") {
      priceString = `R$ ${(price as number).toFixed(2)}`;
    } else {
      priceString = price as string;
    }
    addToCart({ id, name, price: priceString, image });
  };
  const handleViewCart = () => {
    setShowModal(false);
    navigate("/cart");
  };
  return (
    <>
      <S.ProductCard key={key}>
        <S.ProductImage src={image} alt={name} />
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>R$ {price}</S.ProductPrice>
        <S.ButtonContainer>
          <RetantugarButton onClick={handleAddToCart}>Adicionar ao Carrinho</RetantugarButton>
          <RetantugarButton variant="outline" onClick={() => navigate(`/product/${id}`)}>Ver Produto</RetantugarButton>
        </S.ButtonContainer>
      </S.ProductCard>
      {showModal && lastAddedItem && lastAddedItem.id === id && (
        <Modal
          title="Produto adicionado!"
          message={`${lastAddedItem.name} foi adicionado ao carrinho.`}
          onClose={() => setShowModal(false)}
          onAction={handleViewCart}
          actionLabel="Ver Carrinho"
        />
      )}
    </>
  );
};

export default ProductCard;
