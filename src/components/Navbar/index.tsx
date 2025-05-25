import {
  LuMenu,
  LuHouse,
  LuHeart,
  LuShoppingCart,
  LuCassetteTape,
} from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import * as S from "./styles";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  const navItems = [
    { path: "/", label: "Home", icon: <LuHouse aria-label="Home" /> },
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

  return (
    <S.Container>
      <S.Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        NOSTALGIA.STORE
      </S.Logo>
      
      <S.NavContainer>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <S.NavItem
              key={item.path}
              to={item.path}
              $active={isActive}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
              }}
              title={item.label}
            >
              <S.IconWrapper>
                {item.icon}
                {item.path === "/cart" && cartCount > 0 && (
                  <S.CartBadge>{cartCount}</S.CartBadge>
                )}
              </S.IconWrapper>
              {isActive && <span>{item.label}</span>}
            </S.NavItem>
          );
        })}
      </S.NavContainer>

      <S.MobileMenuButton>
        <LuMenu />
      </S.MobileMenuButton>

    </S.Container>
  );
};

export default Navbar;
