import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = (props) => {
    const { className, style, data, onPageChangeCallback, ...rest } = props
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 1

    useEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = +event.selected + 1
        setItemOffset(newOffset)

        if (onPageChangeCallback) {
            onPageChangeCallback(newOffset)
        }
    }

    return (
        <>
            <div className={className} style={style} {...rest}>
                <nav className="pagination">
                    <ReactPaginate
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        breakLabel="..."
                        nextClassName="pagination__pages--btn"
                        nextLabel={
                            <Icon
                                width={24}
                                height={24}
                                icon="pajamas:arrow-right"
                            />
                        }
                        pageLinkClassName="pagination__pages--btn"
                        previousLabel={
                            <Icon
                                width={24}
                                height={24}
                                icon="pajamas:arrow-left"
                            />
                        }
                        breakLinkClassName="pagination__pages--btn"
                        previousClassName="pagination__pages--btn"
                        containerClassName="pagination__pages"
                        pageClassName="pagination__pages--btn"
                        disabledClassName="disable"
                        activeLinkClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </nav>
            </div>
        </>
    )
}

export default Pagination
