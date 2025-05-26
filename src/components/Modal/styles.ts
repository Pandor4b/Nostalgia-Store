import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: ${fadeIn} 0.2s;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.cream};
  border: 3px solid ${({ theme }) => theme.colors.darkText};
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.darkText};
`;

export const ModalMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.darkText};
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const ModalButton = styled.button`
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.darkText};
  border: 2px solid ${({ theme }) => theme.colors.darkText};
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.coral};
    color: ${({ theme }) => theme.colors.lightText};
  }
`;
