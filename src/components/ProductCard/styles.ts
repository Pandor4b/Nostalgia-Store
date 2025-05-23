import styled from 'styled-components'

export const ProductCard = styled.div`
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.darkText};
  padding: 15px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  min-width: 280px;
  margin: 0 15px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 2px solid ${(props) => props.theme.colors.darkText};
`

export const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.coral};
  margin-bottom: 15px;
`

export const ViewButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkText};
  color: white;
  font-weight: 600;
  padding: 8px 0;
  font-size: 14px;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.coral};
  }
`