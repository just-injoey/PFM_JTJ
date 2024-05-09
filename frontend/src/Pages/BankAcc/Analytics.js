

import React from "react";
// import CardBox from "./CardBox";
import { Container, Row } from "react-bootstrap";
import CircularProgressBar from "../../components/CircularProgressBar";
import LineProgressBar from "../../components/LineProgressBar";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// import { Row, Col, Card, Typography, Button, Statistic, Space } from 'antd';
import {
  DollarCircleOutlined,
  BankOutlined,
  FileTextOutlined,
  AlertOutlined,
} from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

// import MovingIcon from '@mui/icons-material/Moving';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const RupeeCircleOutlined = () => (
  <div style={{ fontSize: 24, textAlign: 'center', lineHeight: '24px', width: 30, height: 30, borderRadius: '50%', backgroundColor: '#fff', color: '#000', border: '1px solid #000'  }}>
    ₹
  </div>
);

const Analytics = ({ transactions }) => {
  const navigate = useNavigate();

  const TotalTransactions = transactions.length;
  const totalIncomeTransactions = transactions.filter(
    (item) => item.transactionType === "credit"
  );
  const totalExpenseTransactions = transactions.filter(
    (item) => item.transactionType === "expense"
  );

  let totalIncomePercent =
    (totalIncomeTransactions.length / TotalTransactions) * 100;
  let totalExpensePercent =
    (totalExpenseTransactions.length / TotalTransactions) * 100;

  // console.log(totalIncomePercent, totalExpensePercent);

  const totalTurnOver = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalTurnOverIncome = transactions
    .filter((item) => item.transactionType === "credit")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalTurnOverExpense = transactions
    .filter((item) => item.transactionType === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const TurnOverIncomePercent = (totalTurnOverIncome / totalTurnOver) * 100;
  const TurnOverExpensePercent = (totalTurnOverExpense / totalTurnOver) * 100;

  
  

  return (
    <>
      <Container className="mt-5 ">
        <Row>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header bg-white text-black">
                <span style={{ fontWeight: "bold" }}>
                <BankOutlined/> HDFC
                </span>{" "}
               
              </div>
              <div className="card-body">
              <h5 className="card-title" style={{color: "grey"}}>
                  Account No.: 00001430087895
                </h5>
                <h5 className="card-title" style={{color: "grey"}}>
                  Type: Savings
                </h5>

                <div className="d-flex justify-content-left mt-3 ">
                <RupeeCircleOutlined/>
                  <h5 className="card-title" style={{color: "green"}}>
                     50000                  
                  </h5>
                  
                </div>

              </div>
            </div>
          </div>

        </Row>
      </Container>
        
      
    </>
  );
};

export default Analytics;
