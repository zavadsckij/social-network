import React from'react';
import { useState } from 'react';

let Paginator = (props) =>{
    let pagesCount = Math.ceil(props.totalItemsCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + " ");
      }
    let portionCount = Math.ceil(pagesCount/props.portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize+1;
    let rightPortionNumber = (portionNumber * props.portionSize);



    
    return(
      <nav aria-label="Page navigation example" style={{margin:1+'em'}}>
      <ul className="pagination justify-content-center">
        <li className={portionNumber > 1?"page-item":'page-item disabled'}>
          {
            <button
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
              className={"page-link"}
            >
              Prev Page
            </button>
          }
        </li>
        {pages
          .filter(
            page => page >= leftPortionNumber && page <= rightPortionNumber
          )
          .map(page => {
            return (
              <li key={page}>
                <button
                  className={
                    props.currentPage === page
                      ? "page-link active"
                      : "page-link"
                  }
                  onClick={() => {
                    props.onPageChange(page, props.count);
                  }}
                  
                >
                  {page}
                </button>
              </li>
            );
          })}
        <li className={portionCount > portionNumber ? "page-item" : 'page-item disabled'}>
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
            className={"page-link"}
          >
            Next Page
          </button>
        </li>
      </ul>
    </nav>
    )
}

export default Paginator

