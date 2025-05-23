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
  position: relative;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;

  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;

  background-color: transparent;
  color: ${(props)=> props.theme.colors.darkText};

   box-shadow: ${({ $active }) =>
    $active ? '0 0 0 1px #5D2E8C' : '0 0 0 0px transparent'};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 1px #5D2E8C;
    color: #5D2E8C;
  }
   
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #333;
  cursor: pointer;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  font-size: 24px;
  
  @media (max-width: 768px) {
    display: block;
  }
`