import React from 'react';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './table.css';
import { Button } from 'antd';
function STable() {
  return <div className='table'>
     <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Payment Status</th>
      <th>Amount Paid</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>1</td>
      <td>Mark</td>
      <td style={{color:'yellow'}}>Suspended</td>
      <td>10,0000</td>
      <td> <Button>Confirm</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Paid</td>
      <td>30,000.00</td>
      <td> <Button>Confirm</Button></td>

    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td style={{color:'red'}}>Unpaid</td>
      <td>30,000.00</td>
      <td> <Button>Confirm</Button></td>

    </tr>
  <tr>
      <td>1</td>
      <td>Mark</td>
      <td style={{color:'yellow'}}>Suspended</td>
      <td>10,0000</td>
      <td> <Button>Confirm</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Paid</td>
      <td>30,000.00</td>
      <td> <Button>Confirm</Button></td>

    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td style={{color:'red'}}>Unpaid</td>
      <td>30,000.00</td>
      <td> <Button>Confirm</Button></td>

    </tr>

   

  </tbody>
</Table>
  </div>;
}

export default STable;
