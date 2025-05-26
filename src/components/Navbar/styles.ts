import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  border-bottom: 3px solid ${({ theme }) => theme.colors.purple};
`;

export const Logo = styled.div`
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -1px;
  color: ${(props) => props.theme.colors.darkText};
`;


export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
   border: 1px solid #333;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkText};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.coral : "transparent"};
  font-weight: ${({ $active }) => ($active ? "bold" : "normal")};
  transition: background-color 0.3s ease;

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 6px;
    font-size: 14px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.coral}66; 
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 999px;
  font-weight: bold;
  min-width: 16px;
  text-align: center;
  line-height: 1;
`;

export const CartCount = styled.span`
  background-color: ${(props) => props.theme.colors.coral};
  color: white;
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
`

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 24px;
  
  @media (max-width: 768px) {
    display: block;
  }
`