import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function CardComponent({
  name,
  description,
  idx,
  href,
  buttonName
}) {
  const variant = 'light'
  return (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
    >
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: description }}>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <Button href={href} title={`Open ${name}`}>{buttonName}</Button>
        </small>
      </Card.Footer>
    </Card>
  );
}

CardComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  idx: PropTypes.number,
  href: PropTypes.string,
  buttonName: PropTypes.string
};
CardComponent.defaultProps = {
  name: 'Card title',
  description: `Some quick example text to build on the card title and make up the bulk
  of the card's content.`,
  idx: 0,
  href: '/',
  buttonName: 'Open'
};
