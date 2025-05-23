import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import Button from "../Button";

export type ProductCardProps = {
  key: number;
  name: string;
  price: string;
  image: string;
  id: number;
};

const ProductCard = ({ key, name, price, image, id }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <S.ProductCard key={key} onClick={handleClick}>
        <S.ProductImage src={image} alt={name} />
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>{price}</S.ProductPrice>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </S.ProductCard>
    </>
  );
};

export default ProductCard;
