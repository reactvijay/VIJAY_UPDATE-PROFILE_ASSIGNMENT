import React, { Component } from "react";
import { Link } from "react-router-dom";


const userInfo = [
  { ID: '20', Product: 'Sasquatch Ale', Price: '10.40', Quantity: '130', 'R.O.L.': '10' },
  { ID: '20', Product: 'Geitost', Price: '10.00', Quantity: '125', 'R.O.L.': '10' },
  { ID: '20', Product: 'Mascarpone Fabioli', Price: '9.60', Quantity: '120', 'R.O.L.': '10' },
  { ID: '20', Product: 'Gorgonzola Telino', Price: '9.20', Quantity: '115', 'R.O.L.': '10' },
  { ID: '20', Product: 'Nord-Ost Matjeshering', Price: '8.80', Quantity: '110', 'R.O.L.': '10' },
  { ID: '20', Product: 'Thuringer Rostbratwurst', Price: '8.40', Quantity: '105', 'R.O.L.': '10' },
  { ID: '20', Product: 'Rossle Sauerkraut', Price: '8', Quantity: '100', 'R.O.L.': '10' },
  { ID: '20', Product: 'Schoggi Schokolade', Price: '7.60', Quantity: '95', 'R.O.L.': '10' },
  { ID: '20', Product: 'Gumbar Gummibarchen', Price: '7.20', Quantity: '90', 'R.O.L.': '10' },
  { ID: '20', Product: 'NuNuCa Nu8-Nougat-Creme', Price: '6.80', Quantity: '85', 'R.O.L.': '10' }
];

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpopup: false,
    };
  }
  renderPopUp = () => {
    return (
      <div className="modal fade show in" id="myModal" role="dialog">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <button onClick={this.closePopup.bind(this)} type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title confirm-content">Are You sure want to delete the data ?</h4>
            </div>
            <div className="modal-body text-center">
            <button type="button" className="btn btn-default body-content" data-dismiss="modal">Yes</button>
            <button onClick={this.closePopup.bind(this)} type="button" className="btn btn-default body-content" data-dismiss="modal">No</button>
            </div>
            
          </div>

        </div>
      </div>
    )
  }
  openPopup = () => {
    this.setState({
      showpopup: true,
    });
  }
  closePopup = () => {
    this.setState({
      showpopup: false,
    });
  }

  renderTableHeader = () => {
    return (<tr className="" >
      <th><a>ID</a></th>
      <th><a>Product</a></th>
      <th><a>Price</a></th>
      <th><a>Quality</a></th>
      <th><a>R.O.L</a></th>
      <th><a>Action</a></th>
    </tr>)
  }
  renderTableRow = () => {
    return userInfo.map((user, i) =>
      <tr className="user-row" key={i}>
        <td>{user.ID}</td>
        <td>{user.Product}</td>
        <td>{user.Price}</td>
        <td>{user.Quantity}</td>
        <td>{user['R.O.L.']}</td>
        <td><Link className="glyphicon glyphicon-pencil" to="/productedit" />
          <span onClick={this.openPopup.bind(this)} className="glyphicon glyphicon-remove crud-close" /></td>
      </tr>
    )
  }
  render() {
    return (
      <div>
        <p><h4><strong>Product List</strong></h4></p>
        <Link className="add-product-btn add-btn" to="/productadd">Add New Product</Link>
        <table>
          {this.renderTableHeader()}
          {this.renderTableRow()}
          {/* {this.renderRemoveRow()} */}

        </table>
        {this.state.showpopup ? this.renderPopUp(): null}
      </div>
    );
  }
}