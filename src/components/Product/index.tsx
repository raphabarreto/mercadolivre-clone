import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="https://www.mercadolivre.com.br/">Compartilhar</a>
        <a href="https://www.mercadolivre.com.br/">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySession />
          <WarrantySession />
          <WarrantySession />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySession = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="https://www.mercadolivre.com.br/">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
      veritatis ut minus, cumque dolores deleniti rem facere harum unde odit
      dicta minima repudiandae quia, accusantium provident consectetur
      consequatur debitis fugiat?
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat
      voluptate quae quaerat, delectus voluptates error ad repudiandae numquam!
      Amet molestias voluptatem dignissimos aut harum asperiores reiciendis
      corrupti omnis magni.
    </p>
  </Description>
);

export default Product;
