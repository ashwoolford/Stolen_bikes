import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from './Pagination.styles';


const Pagination: React.FC = () => {
    const handlePageChange = (event: any) => {
        console.log(event);
    };

    return (
        <PaginationContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageChange}
                pageRangeDisplayed={1}
                pageCount={100}
                initialPage={0}
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
