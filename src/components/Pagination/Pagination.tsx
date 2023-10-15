import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './Pagination.styles';

type Props = {
    initialPage: number,
    pageCount: number,
    handlePageChange: (selected: any) => void
};

const Pagination: React.FC<Props> = ({ initialPage, pageCount, handlePageChange }) => {

    return (
        <PaginationContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                initialPage={initialPage}
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
