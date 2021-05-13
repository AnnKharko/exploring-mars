import React from "react";

export const PaginationWrapper = ({children, currentPage, totalPages, onPrevClick, onNextClick}) => {

    const handleNextClick = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick() && onNextClick(currentPage + 1)
        }
    };

    const handlePrevClick = () => {
        if (currentPage - 1 > 0) {
            onPrevClick() && onPrevClick(currentPage - 1)
        }
    };

    return (
        <div>

                <button onClick={handlePrevClick}>prev page</button>
                <span>{currentPage} of { totalPages}</span>
                <button onClick={handleNextClick}>Load moore...</button>

            {children}
        </div>
    )
};
