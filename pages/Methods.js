import { Container, Row, Col, Image } from 'react-bootstrap';

function Methods() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Methods with Passion & Excellence</h1>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-3">
          <Image src="/ai-rl.png" alt="RL" thumbnail />
        </Col>
        <Col md={6}>
          <h2>Who we are?</h2>
          <p>
            Our team is a collection of AI and blockchain specialists to deliver state-of-art solutions, using Reinforcement Learning, DeFi Composition, Optimization, Smart Contracts, and Wallet integrations.
          </p>

          <h2>What we do?</h2>
          <p>
	  We work in the field of optimization by implement AI learning systems. These systems assign rewards to DeFi Protocols so we can use multiple DeFi Protocols in one transaction. This lowers slippage, improves returns and enable complex financial products to be built.
          </p>

          <h2>Core Values</h2>
          <p>
	  We believe that DeFi solutions can revolutionize financial systems, improving access to financial services, providing better investment returns, more choice for users, and lower operating costs. 
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Methods;
