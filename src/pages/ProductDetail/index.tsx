import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/productsApi";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading)
    return (
      <div>
        <Navbar />
        <S.ProductDetailContainer>
          Carregando produto...
        </S.ProductDetailContainer>
      </div>
    );
  if (!product)
    return (
      <div>
        <Navbar />
        <S.ProductDetailContainer>
          Produto não encontrado.
        </S.ProductDetailContainer>
      </div>
    );

  return (
    <div>
      <Navbar />
      <S.ProductDetailContainer>
        <S.ProductDetailContent>
          <S.ProductImageSection>
            <S.MainImageContainer>
              <S.MainImage src={product.image} alt={product.name} />
            </S.MainImageContainer>
          </S.ProductImageSection>
          <S.ProductInfoSection>
            <S.ProductCategory>
              {product.category || "Produto"}
            </S.ProductCategory>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductPrice>R$ {product.price}</S.ProductPrice>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.ProductDetailsTitle>Details:</S.ProductDetailsTitle>
            <S.ProductDetailsList>
              {product.details &&
                product.details.map((detail: string, index: number) => (
                  <S.ProductDetailItem key={index}>
                    {detail}
                  </S.ProductDetailItem>
                ))}
            </S.ProductDetailsList>
            <S.ButtonsContainer>
              <S.AddToCartButton>Adicionar ao Carrinho</S.AddToCartButton>
              <S.WishlistButton>Adicionar aos Favoritos</S.WishlistButton>
            </S.ButtonsContainer>
          </S.ProductInfoSection>
        </S.ProductDetailContent>
        <S.CheckeredBorder />
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetail;
