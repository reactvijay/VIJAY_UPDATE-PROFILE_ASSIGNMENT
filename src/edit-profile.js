import React, { Component } from "react";
import { Link } from "react-router-dom";


const userInfo = [

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
 
  render() {
    return (
      <div>
        <p><h4><strong>Edit profile </strong></h4></p>
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