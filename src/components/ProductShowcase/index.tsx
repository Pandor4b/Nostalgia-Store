import { useState } from "react";
import * as S from "./styles.ts";
import ProductCard from "../ProductCard/index.tsx";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Retro Graphic Tee",
      price: "$35.00",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      price: "$65.00",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 3,
      name: "Patterned Midi Dress",
      price: "$48.00",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 4,
      name: "High-Waist Jeans",
      price: "$55.00",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 5,
      name: "Retro Sunglasses",
      price: "$28.00",
      image: "/placeholder.svg?height=300&width=250",
    },
    {
      id: 6,
      name: "Platform Sandals",
      price: "$42.00",
      image: "/placeholder.svg?height=300&width=250",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerView = 3;
  const maxIndex = Math.max(0, products.length - productsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <S.ShowcaseContainer>
      <S.CheckeredBorder />
      <S.ShowcaseContent>
        <S.ShowcaseHeading>HEY, THAT LOOKS GREAT ON YOU!</S.ShowcaseHeading>
        <S.ProductCarousel>
          <S.CarouselTrack
            style={{ transform: `translateX(-${currentIndex * (280 + 30)}px)` }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </S.CarouselTrack>
        </S.ProductCarousel>

        <S.CarouselNavigation>
          <S.CarouselButton onClick={prevSlide}>←</S.CarouselButton>
          <S.CarouselButton onClick={nextSlide}>→</S.CarouselButton>
        </S.CarouselNavigation>

        <S.CarouselDots>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <S.CarouselDot
              key={index}
              active={currentIndex === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </S.CarouselDots>
      </S.ShowcaseContent>
      <S.BottomCheckeredBorder />
    </S.ShowcaseContainer>
  );
};

export default ProductShowcase;
