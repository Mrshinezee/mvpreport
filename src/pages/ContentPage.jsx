import { useState, useEffect } from 'react';
import axios from 'axios';
import ContentHeader from './ContentHeader';

// import { getContentData } from '../utils';
import '../App.css';

const ContentPage = () => {
  const [tickets, setTickets] = useState([]);
  const [reports, setReport] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [visible, setVisible] = useState(false);

  const payload = {
    from: '',
    to: '',
  };

  // useEffect(() => {
  //   // declare the async data fetching function
  //   const swUrl = `${process.env.REACT_APP_URL}/report`;
  //   const fetchData = async () => {
  //     const Results = await axios.post(swUrl, payload);
  //     setReport(Results?.data?.data);
  //     console.log('Results', Results);
  //   };
  //   fetchData();
  // }, []);

  // const boardData = getBoardData(tickets);
  return (
    <div className="content">
      <ContentHeader />
    </div>
  );
};

export default ContentPage;
