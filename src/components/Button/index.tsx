// components/Button.js
import { ReactNode } from "react";
import styled from "styled-components";

type BtnProps = {
  isLoading: boolean;
};

const Btn = styled.button<BtnProps>`
  background-color: ${(props) =>
    props.isLoading
      ? "gray"
      : "red"}; // mostar un color o otro depende lo que salga
  padding: 25px 30px;
`;
type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading = false, onClick }: Props) {
  return (
    <Btn onClick={onClick} disabled={isLoading} isLoading={isLoading}>
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

// Opción: Usar defaultProps para valores predeterminados
Button.defaultProps = {
  isLoading: false,
};

export default Button;
