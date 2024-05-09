import React from "react";
import { Card, Button } from "react-bootstrap";

const BankAccountCard = ({ account }) => {
  const handleDelete = () => {
    // Implement delete functionality here
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{account.name}</Card.Title>
        <Card.Text>Balance: {account.balance}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default BankAccountCard;
