

import React from "react";
// import CardBox from "./CardBox";
// import { Container, Row } from "react-bootstrap";
import CircularProgressBar from "../../components/CircularProgressBar";
import LineProgressBar from "../../components/LineProgressBar";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import { Row, Col, Card, Typography, Button, Statistic, Space } from 'antd';
import {
  DollarCircleOutlined,
  BankOutlined,
  FileTextOutlined,
  AlertOutlined,
} from '@ant-design/icons'
import { PageLayout } from './layouts/NavigationLayout/Page.layout.tsx'
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

  const categories = [
    "Groceries",
    "Rent",
    "Salary",
    "Tip",
    "Food",
    "Medical",
    "Utilities",
    "Entertainment",
    "Transportation",
    "Other",
  ];

  const colors = {
    "Groceries": '#FF6384',
    "Rent": '#36A2EB',
    "Salary": '#FFCE56',
    "Tip": '#4BC0C0',
    "Food": '#9966FF',
    "Medical": '#FF9F40',
    "Utilities": '#8AC926',
    "Entertainment": '#6A4C93',
    "Transportation": '#1982C4',
    "Other": '#F45B69',
  };
  
  

  return (
    <>
      <PageLayout layout="full-width">
      {/* <Title level={2}>Dashboard</Title> */}
      {/* <Text>Welcome back, {user?.name || 'User'}!</Text> */}

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card onClick={() => navigate('/bankacc')}>
            <Statistic
              title="Total Balance"
              value = "0"
              // value={user?.bankAccounts?.reduce(
              //   (acc, account) => acc + account.balance,
              //   0,
              // )}
              // prefix={<DollarCircleOutlined />}
              prefix={<RupeeCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>
      </PageLayout>

        
      {/* <Container className="mt-5 ">
        <Row>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header bg-black text-white">
                <span style={{ fontWeight: "bold" }}>Total Transactions:</span>{" "}
                {TotalTransactions}
              </div>
              <div className="card-body">
                <h5 className="card-title " style={{color: "green"}}>
                  Income: <ArrowDropUpIcon/>{totalIncomeTransactions.length}
                </h5>
                <h5 className="card-title" style={{color: "red"}}>
                  Expense: <ArrowDropDownIcon />{totalExpenseTransactions.length}
                </h5>

                <div className="d-flex justify-content-center mt-3">
                  <CircularProgressBar
                    percentage={totalIncomePercent.toFixed(0)}
                    color="green"
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 mb-2">
                  <CircularProgressBar
                    percentage={totalExpensePercent.toFixed(0)}
                    color="red"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header bg-black text-white ">
                <span style={{ fontWeight: "bold" }}>Total TurnOver:</span>{" "}
                {totalTurnOver}
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{color: "green"}}>Income: <ArrowDropUpIcon /> {totalTurnOverIncome} <CurrencyRupeeIcon /></h5>
                <h5 className="card-title" style={{color: "red"}}>Expense: <ArrowDropDownIcon />{totalTurnOverExpense} <CurrencyRupeeIcon /></h5>
                <div className="d-flex justify-content-center mt-3">
                  <CircularProgressBar
                    percentage={TurnOverIncomePercent.toFixed(0)}
                    color="green"
                  />
                </div>

                <div className="d-flex justify-content-center mt-4 mb-4">
                  <CircularProgressBar
                    percentage={TurnOverExpensePercent.toFixed(0)}
                    color="red"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header  bg-black text-white">
                <span style={{ fontWeight: "bold" }}>Categorywise Income</span>{" "}
              </div>
              <div className="card-body">
                {categories.map(category => {
                  const income = transactions.filter(transaction => transaction.transactionType === "credit" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                  
                  const incomePercent = (income/ totalTurnOver) * 100;

 

                  return(
                    <>
                    {income > 0 &&
                      (<LineProgressBar label={category} percentage={incomePercent.toFixed(0)} lineColor={colors[category]} />)

                    }
                    </>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header  bg-black text-white">
                <span style={{ fontWeight: "bold" }}>Categorywise Expense</span>{" "}
              </div>
              <div className="card-body">
                {categories.map(category => {
                  const expenses = transactions.filter(transaction => transaction.transactionType === "expense" && transaction.category === category).reduce((acc, transaction) => acc + transaction.amount, 0)
                  
                  const expensePercent = (expenses/ totalTurnOver) * 100;


                  return(
                    <>
                    {expenses > 0 &&
                      (<LineProgressBar label={category} percentage={expensePercent.toFixed(0)} lineColor={colors[category]}/>)

                    }
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </Row>
      </Container> */}
    </>
  );
};

export default Analytics;
