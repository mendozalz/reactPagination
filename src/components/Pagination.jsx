const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const onPrevPage = (e) =>{
    e.preventDefault();
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const onNextPage = (e) => {
    e.preventDefault();
    if(currentPage < pageNumbers.length){
      setCurrentPage(currentPage + 1);
    }
  }

  // const specificPage = (n) => {
  //   setCurrentPage(n);
  // }

  return (
    <nav className="mb-96">
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 w-20 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={onPrevPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-black">Anterior</span>
          </a>
        </li>

        {pageNumbers.map(page=>(
            <li key={page}>
            <a
              href="#"
              className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900 ${page === currentPage ? 'bg-black text-red-500' : ''}`}
              onClick={(e)=> { e. preventDefault()}}
            >
              {page}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 w-20 ${currentPage === pageNumbers.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onNextPage}
          >
            <span className="text-black">Siguiente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Pagination;
