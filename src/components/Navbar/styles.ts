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
  border-bottom: 3px solid ${({ theme }) => theme.colors.darkText};

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

export const Logo = styled.div`
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  font-size: 24px;
  letter-spacing: -1px;
  color: ${(props) => props.theme.colors.darkText};
  z-index: 1101;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NavContainer = styled.div<{ $mobileOpen?: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    background: ${({ theme }) => theme.colors.cream};
    position: fixed;
    top: 60px;
    right: 0;
    width: 70vw;
    max-width: 320px;
    height: calc(100vh - 60px);
    box-shadow: -2px 0 12px rgba(0,0,0,0.08);
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    transform: ${({ $mobileOpen }) => $mobileOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 1100;
    gap: 1.5rem;
  }
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
  transition: background-color 0.3s, color 0.3s;
  position: relative;

  svg {
    font-size: 20px;
  }

  span {
    margin-left: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkText};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.coral}66; 
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    font-size: 18px;
    padding: 12px 0;
    border: none;
    border-radius: 0;
    background-color: ${({ $active, theme }) => $active ? theme.colors.coral : 'transparent'};
    color: ${({ $active, theme }) => $active ? theme.colors.lightText : theme.colors.darkText};
    span {
      color: ${({ $active, theme }) => $active ? theme.colors.lightText : theme.colors.darkText};
    }
    &:hover {
      background: ${({ theme }) => theme.colors.coral}99;
      color: ${({ theme }) => theme.colors.lightText};
      span {
        color: ${({ theme }) => theme.colors.lightText};
      }
    }
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
  font-size: 28px;
  border: none;
  color: ${({ theme }) => theme.colors.darkText};
  z-index: 1102;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.18);
    z-index: 1099;
    transition: opacity 0.2s;
  }
`;

export const ActiveLine = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.coral};
    border-radius: 2px;
    margin-top: 4px;
    margin-bottom: -8px;
  }
`;

export const PageList = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 18px;
    right: 18px;
    background: ${({ theme }) => theme.colors.cream};
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    padding: 12px 18px;
    z-index: 1200;
    min-width: 120px;
    opacity: 0.97;
  }
`;