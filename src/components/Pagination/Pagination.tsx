import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './Pagination.styles';

type Props = {
    forcePage: number,
    pageCount: number,
    handlePageChange: Function
};

const Pagination: React.FC<Props> = ({ forcePage, pageCount, handlePageChange }) => {

    return (
        <PaginationContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={(e) => handlePageChange(e.selected+1)}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                forcePage={forcePage-1}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </PaginationContainer>
    );
};

export default Pagination;
