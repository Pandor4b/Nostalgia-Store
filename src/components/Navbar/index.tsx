import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { LuShoppingCart, LuMenu } from "react-icons/lu";
import { useState } from "react";
import { useCart } from "../../CartContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/#", label: "Best Sellers" },
    { path: "/#", label: "On Sale" },
    { path: "/#", label: "Lookbook" },
    { path: "/#", label: "Contact" },
  ];

  return (
    <S.Container>
      <S.Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        NOSTALGIA.STORE
      </S.Logo>
      <S.NavContainer>
        {navItems.map((item) => (
          <S.NavItem
            to={item.path}
            key={item.path}
            $active={location.pathname === item.path}
          >
            {item.label}
          </S.NavItem>
        ))}
      </S.NavContainer>

      <S.MobileMenuButton>
        <LuMenu></LuMenu>
      </S.MobileMenuButton>
      <S.RightSection>
        <S.CartButton onClick={() => navigate("/cart")} aria-label="Carrinho">
          <S.CartCount>{cartCount}</S.CartCount>
          <S.CartIcon></S.CartIcon>
        </S.CartButton>
      </S.RightSection>
    </S.Container>
  );
};

export default Navbar;
