import { Wrapper, BoardContainer } from './styles';

interface OrderBoardProps {
  icon?: string;
  title: string;
}

export function OrderBoard({ icon, title }: OrderBoardProps) {
  return (
    <Wrapper>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <BoardContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>

        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </BoardContainer>
    </Wrapper>
  );
}
