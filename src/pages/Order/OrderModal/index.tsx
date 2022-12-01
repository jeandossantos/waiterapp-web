import { Overlay, BodyModal, OrderDetails } from './styles';
import closeIcon from '../../../assets/images/close-icon.svg';
import { Order } from '../../../interfaces/Order';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}
export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      <BodyModal>
        <header>
          <strong>Mesa 2</strong>

          <button>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>

          <div>
            <span>{order.status === 'WAITING' && '🕒️'}</span>
            <span>{order.status === 'IN_PRODUCTION' && '👨‍🍳'}</span>
            <span>{order.status === 'DONE' && '✅'}</span>

            <strong>
              <span>{order.status === 'WAITING' && 'Fila de espera'}</span>
              <span>{order.status === 'IN_PRODUCTION' && 'Em preparação'}</span>
              <span>{order.status === 'DONE' && 'Pronto!'}</span>
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </BodyModal>
    </Overlay>
  );
}
