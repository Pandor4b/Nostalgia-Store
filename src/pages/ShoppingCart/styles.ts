import styled from "styled-components"

export const CartContainer = styled.section`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 8rem 0; 
  position: relative;
  min-height: 70vh;
`

export const CartContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const CartHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;
`

export const CartTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
`

export const CartSubtitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
`

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CartItems = styled.div`
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.darkText};
  padding: 30px;
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

export const CartItemsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  z-index: 1;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 80px 1fr;
    gap: 15px;
  }
`

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.colors.darkText};
  
  @media (max-width: 640px) {
    width: 80px;
    height: 80px;
  }
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ItemName = styled.h3`
  font-size: 18px;
  margin: 0;
  
  @media (max-width: 640px) {
    font-size: 16px;
  }
`

export const ItemPrice = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.coral};
  font-weight: 600;
  margin: 0;
`

export const ItemSize = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  margin: 0;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 640px) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`

export const QuantityButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkText};
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.coral};
  }
`

export const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
`

export const RemoveButton = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.coral};
  font-size: 20px;
  padding: 5px;
  transition: all 0.3s ease;
  border: none;
  curosr: pointer;
  
  &:hover {
    color: ${(props) => props.theme.colors.darkText};
    transform: scale(1.1);
  }
  
  @media (max-width: 640px) {
    grid-column: 1 / -1;
    justify-self: end;
  }
`

export const CartSummary = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  border: 3px solid ${(props) => props.theme.colors.darkText};
  padding: 30px;
  height: fit-content;
  position: sticky;
  top: 20px;
`

export const SummaryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 25px;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;

  .spanFee {
    font-size: 14px;
    color: #666;
  }
`

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  font-size: 20px;
  font-weight: 700;
  padding-top: 20px;
  border-top: 2px solid ${(props) => props.theme.colors.darkText};
`

export const RoundButton = styled.button<{
  $variant?: "checkout" | "continue";
  }>`
  width: 100%;
  padding: 14px;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.colors.darkText};
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  margin-bottom: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: ${({ $variant, theme }) =>
    $variant === "checkout"
      ? theme.colors.green
      : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkText};
    color: white;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: white;
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

export const EmptyCartIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`

export const EmptyCartText = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`

export const EmptyCartSubtext = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`

export const ShopNowButton = styled.button`
  background-color: ${(props) => props.theme.colors.coral};
  color: white;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.darkText};
    transform: translateY(-2px);
  }
`
