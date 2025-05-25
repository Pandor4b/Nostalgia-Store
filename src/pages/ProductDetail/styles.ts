import styled from "styled-components"

export const ProductDetailContainer = styled.section`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 70px 0 60px 0;
  position: relative;
`

export const ProductDetailContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const ProductImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MainImageContainer = styled.div`
  border: 3px solid ${(props) => props.theme.colors.darkText};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 2px dashed ${(props) => props.theme.colors.darkText};
    z-index: 0;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 1;
`

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 480px) {
    overflow-x: auto;
    padding-bottom: 10px;
  }
`

export const Thumbnail = styled.div<{ active: boolean }>`
  width: 80px;
  height: 80px;
  border: 2px solid ${(props) => (props.active ? props.theme.colors.coral : props.theme.colors.darkText)};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.coral};
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProductInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ProductCategory = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  margin-bottom: 10px;
`

export const ProductTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 15px;
  font-weight: 700;
`

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
`

export const ProductDetailsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
`

export const ProductDetailsList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`

export const ProductDetailItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  
  &:before {
    content: '•';
    color: ${(props) => props.theme.colors.coral};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`

export const AddToCartButton = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.darkText};
  font-weight: 600;
  padding: 15px;
  border-radius: 30px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.darkText};
    color: white;
    transform: translateY(-2px);
  }
`

export const WishlistButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.darkText};
  font-weight: 600;
  padding: 14px;
  border-radius: 30px;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.darkText};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.darkText};
    color: white;
  }
`