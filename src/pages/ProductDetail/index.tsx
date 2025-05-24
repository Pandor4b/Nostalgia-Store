import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/productsApi";
import { useCart } from "../../hooks/useCart";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart, showModal, setShowModal, lastAddedItem } = useCart();

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
              <S.AddToCartButton
                onClick={() => {
                  let priceString: string;
                  if (typeof product.price === "number") {
                    priceString = `R$ ${product.price.toFixed(2)}`;
                  } else {
                    priceString = product.price;
                  }
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: priceString,
                    image: product.image,
                  });
                }}
              >
                Adicionar ao Carrinho
              </S.AddToCartButton>
              <S.WishlistButton>Adicionar aos Favoritos</S.WishlistButton>
            </S.ButtonsContainer>
            {showModal && lastAddedItem && lastAddedItem.id === product.id && (
              <Modal
                title="Produto adicionado!"
                message={`${lastAddedItem.name} foi adicionado ao carrinho.`}
                onClose={() => setShowModal(false)}
                onAction={() => {
                  setShowModal(false);
                  navigate("/cart");
                }}
                actionLabel="Ver Carrinho"
              />
            )}
          </S.ProductInfoSection>
        </S.ProductDetailContent>
        <S.CheckeredBorder />
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetail;
