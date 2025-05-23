import * as S from "./styles";


export type ProductCardProps = {
  key: number
  name: string;
  price: string;
  image: string;
};

const ProductCard = ({ key, name, price, image }: ProductCardProps) => {
  return (
    <>
      <S.ProductCard key={key}>
        <S.ProductImage src={image} alt={name} />
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>{price}</S.ProductPrice>
        <S.ViewButton>Adicionar ao Carrinho</S.ViewButton>
        {/* <S.ViewButton>View Item</S.ViewButton> */}
      </S.ProductCard>
    </>
  );
};

export default ProductCard;
