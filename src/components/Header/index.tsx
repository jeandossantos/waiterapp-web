import logo from '../../assets/images/logo.svg';

import { Wrapper, Content } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="app logo" />
      </Content>
    </Wrapper>
  );
}
