import { useState } from "react";
import {
  LuMenu,
  LuHouse,
  LuHeart,
  LuShoppingCart,
  LuCassetteTape,
  LuX,
} from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import * as S from "./styles";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <LuHouse aria-label="Home" /> },
    {
      path: "/favorites",
      label: "Favoritos",
      icon: <LuHeart aria-label="Favoritos" />,
    },
    {
      path: "/cart",
      label: "Carrinho",
      icon: <LuShoppingCart aria-label="Carrinho" />,
    },
    {
      path: "/orders",
      label: "Histórico",
      icon: <LuCassetteTape aria-label="Histórico de Compras" />,
    },
  ];

  const handleNav = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <S.Container>
      <S.Logo onClick={() => handleNav("/")} style={{ cursor: "pointer" }}>
        NOSTALGIA.STORE
      </S.Logo>

      <S.MobileMenuButton
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? <LuX /> : <LuMenu />}
      </S.MobileMenuButton>

      <S.NavContainer $mobileOpen={mobileOpen}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <S.NavItem
              key={item.path}
              to={item.path}
              $active={isActive}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.path);
              }}
              title={item.label}
            >
              <S.IconWrapper>
                {item.icon}
                {item.path === "/cart" && cartCount > 0 && (
                  <S.CartBadge>{cartCount}</S.CartBadge>
                )}
              </S.IconWrapper>
              <span>{item.label}</span>
            </S.NavItem>
          );
        })}
      </S.NavContainer>

      {mobileOpen && <S.Overlay onClick={() => setMobileOpen(false)} />}
    </S.Container>
  );
};

export default Navbar;
