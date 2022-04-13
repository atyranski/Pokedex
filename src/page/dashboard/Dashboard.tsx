import './style.scss';

import React, { useState } from 'react';

// import Navbar from '../../components/navbar/navbar';

export default function Dashboard() {

//     const [data, setData] = useState(null);
//   async function componentDidMount() {
//     try {
//       const res = await fetch('http://localhost:8000/api/printers/1');
//       const printer= await res.json();
//       setData(printer.brand);
//       console.log(data);
//       return printer;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   componentDidMount();


  return (
    <div className="dashboard_container">
      {/* <Navbar /> */}
      <div className="page_container">
        <div className="main">
            Dashboard
        </div>
      </div>
    </div>
  );
}