import { OrderBoard } from './OrderBoard';
import { Wrapper } from './styles';

import { orders } from '../../mocks/orders';

export function Order() {
  return (
    <Wrapper>
      <OrderBoard icon="🕒️" title="Em espera" orders={orders} />
      <OrderBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrderBoard icon="✅" title="Pronto!" orders={[]} />
    </Wrapper>
  );
}
