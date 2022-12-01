import { useState } from 'react';
import { Order } from '../../../interfaces/Order';
import { OrderModal } from '../OrderModal';
import { Wrapper, BoardContainer } from './styles';

interface OrderBoardProps {
  icon?: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  return (
    <Wrapper>
      <OrderModal visible={isModalVisible} order={selectedOrder} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <BoardContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </BoardContainer>
      ) : (
        ''
      )}
    </Wrapper>
  );
}
