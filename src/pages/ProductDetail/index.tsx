import Navbar from "../../components/Navbar";
import * as S from "./styles";
import { useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Retro Graphic Tee",
    price: "$35.00",
    image: "/placeholder.svg?height=600&width=500",
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500",
    ],
    category: "Tops/Blouses",
    description:
      "Brighten up your wardrobe this summer with our Retro Graphic Tee.",
    details: [
      "100% Organic Cotton",
      "Hand-crocheted in Devon",
      "Chest (inches): 37",
      "Length (inches): 25",
      "Size Guide: L",
      "Condition: Good",
      "Decade: 1970s",
      "Stock code: RCFT/07/05/2023",
    ],
  },
  // ...adicione os outros produtos aqui
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id == Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <>
      <Navbar />
      <S.ProductDetailContainer>
        <h2>Produto não encontrado.</h2>
      </S.ProductDetailContainer>
      </>
    )
  }

  return (
    <div>
      <Navbar />
      <S.ProductDetailContainer>
        <S.ProductDetailContent>
          <S.ProductImageSection>
            <S.MainImageContainer>
              <S.MainImage
                src={product.images[selectedImage]}
                alt={product.name}
              />
            </S.MainImageContainer>
            <S.ThumbnailsContainer>
              {product.images.map((image, index) => (
                <S.Thumbnail
                  key={index}
                  active={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                >
                  <S.ThumbnailImage
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                  />
                </S.Thumbnail>
              ))}
            </S.ThumbnailsContainer>
          </S.ProductImageSection>
          <S.ProductInfoSection>
            <S.StarDecoration />
            <S.ProductCategory>{product.category}</S.ProductCategory>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductPrice>{product.price}</S.ProductPrice>
            <S.ProductDescription>
              {product.description}
            </S.ProductDescription>
            <S.ProductDetailsTitle>Details:</S.ProductDetailsTitle>
            <S.ProductDetailsList>
              {product.details.map((detail, index) => (
                <S.ProductDetailItem key={index}>{detail}</S.ProductDetailItem>
              ))}
            </S.ProductDetailsList>
            <S.ButtonsContainer>
              <S.AddToCartButton>Add To Basket</S.AddToCartButton>
              <S.WishlistButton>Add To Wishlist</S.WishlistButton>
            </S.ButtonsContainer>
          </S.ProductInfoSection>
        </S.ProductDetailContent>
        <S.CheckeredBorder />
      </S.ProductDetailContainer>
    </div>
  );
};

export default ProductDetail;
