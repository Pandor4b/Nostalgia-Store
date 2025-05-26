import * as S from "./styles";

export type ProductCardProps = {
  key: number;
  name: string;
  price: string;
  image: string;
  id: number;
  children?: React.ReactNode;
};

const ProductCard = ({ key, name, price, image, id, children }: ProductCardProps) => {

  return (
    <>
      <S.ProductCard key={key}>
        <S.ProductImage src={image} alt={name} />
        <S.ProductName>{name}</S.ProductName>
        <S.ProductPrice>R$ {price}</S.ProductPrice>
        <S.ButtonContainer>
          {children && <S.ButtonContainer>{children}</S.ButtonContainer>}
        </S.ButtonContainer>
      </S.ProductCard>
    </>
  );
};

export default ProductCard;
