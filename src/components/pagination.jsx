import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  constructor(props) {
    super(props);
    var { length, pagesize} = this.props;
     var pagecount=Math.ceil(length/pagesize)
    this.state = {
      pages: _.range(1, pagecount + 1),
     
    };
  }

  render() {
    console.log(this.props.currpage);
    const { pages } = this.state;
        if (this.pagecount === 1) return null;

    return (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map((page, index) => (
              <li key={index} className={this.props.currpage===page?'page-item active':'page-item'}>
                <a className="page-link" href="#" onClick={()=>{this.props.pagedisplay(page)}}>{page}</a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Pagination;
