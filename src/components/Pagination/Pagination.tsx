type PaginationProps = {
  numberOfPage: number;
  activePage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  numberOfPage,
  activePage,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="paginationContainer">
      <ul>
        {new Array(numberOfPage).fill(0).map((_, index) => (
          <li key={index}>
            <button
              className={
                activePage === index
                  ? "paginationButton active"
                  : "paginationButton"
              }
              onClick={() => onPageChange(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
