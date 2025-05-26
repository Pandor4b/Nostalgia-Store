import * as S from "./styles";

export type ProductCardProps = {
  id: number;
  key?: number;
  name: string;
  price: string;
  image: string;
  children?: React.ReactNode;
};

const ProductCard = ({ id, name, price, image, children }: ProductCardProps) => {

  return (
    <>
      <S.ProductCard key={id}>
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
