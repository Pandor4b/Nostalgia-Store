import styled from "styled-components"

export const OrderHistoryContainer = styled.section`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 8rem 0;
  position: relative;
  min-height: 70vh;
`

export const OrderHistoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const OrderHistoryHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;
`

export const OrderHistoryTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
`

export const OrderHistorySubtitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
`

export const FilterSection = styled.div`
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.darkText};
  padding: 25px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const FilterLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
`

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 2px solid ${(props) => props.theme.colors.darkText};
  background-color: white;
  font-size: 14px;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.coral};
  }
`

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 2px solid ${(props) => props.theme.colors.darkText};
  background-color: white;
  font-size: 14px;
  min-width: 300px;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.coral};
  }
  
  &::placeholder {
    color: #999;
  }
`

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const OrderCard = styled.div`
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.darkText};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 100%;
    height: 100%;
    border: 2px dashed ${(props) => props.theme.colors.darkText};
    z-index: 0;
  }
`

export const OrderHeader = styled.div`
  background-color: ${(props) => props.theme.colors.yellow};
  padding: 20px 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const OrderLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.7;
`

export const OrderValue = styled.span`
  font-size: 16px;
  font-weight: 600;
`

export const OrderStatus = styled.span<{ status: string }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  background-color: ${(props) => {
    switch (props.status) {
      case "delivered":
        return props.theme.colors.green
      case "shipped":
        return props.theme.colors.blue
      case "processing":
        return props.theme.colors.orange
      case "cancelled":
        return props.theme.colors.coral
      default:
        return "#ccc"
    }
  }};
  color: ${(props) => (props.status === "shipped" || props.status === "cancelled" ? "white" : props.theme.colors.darkText)};
`

export const OrderBody = styled.div`
  padding: 25px;
  position: relative;
  z-index: 1;
`

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`

export const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 15px;
  align-items: center;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.cream};
  border: 1px solid #ddd;
`

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.colors.darkText};
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ItemName = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export const ItemInfo = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.coral};
`

export const OrderActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  padding-top: 20px;
  border-top: 1px solid #eee;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

export const ActionButton = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: ${props.theme.colors.coral};
    color: white;
    border: none;
    
    &:hover {
      background-color: ${props.theme.colors.darkText};
      transform: translateY(-2px);
    }
  `
      : `
    background-color: transparent;
    color: ${props.theme.colors.darkText};
    border: 2px solid ${props.theme.colors.darkText};
    
    &:hover {
      background-color: ${props.theme.colors.darkText};
      color: white;
    }
  `}
`

export const EmptyState = styled.div`
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

export const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
`

export const EmptyText = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`

export const EmptySubtext = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.darkText};
  opacity: 0.7;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
`

export const ShopButton = styled.button`
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
