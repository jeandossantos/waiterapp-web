import { OrderBoard } from './OrderBoard';
import { Wrapper } from './styles';

export function Order() {
  return (
    <Wrapper>
      <OrderBoard icon="🕒️" title="Em espera" />
      <OrderBoard icon="👨‍🍳" title="Em preparação" />
      <OrderBoard icon="✅" title="Pronto!" />
    </Wrapper>
  );
}
