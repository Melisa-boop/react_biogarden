function Pagination(props) {
    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
                <li className={ props.previous == 0 ? "page-item disabled" : "page-item" }>
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                { getPages(props) }                
                <li className={ props.next == 0 ? "page-item disabled" : "page-item" }>
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    );
}

function getPages(props){
    let pageElements = [];
    
    if (props.pages >= 3) {
        if (props.previous == 0) {
            pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.next}</a></li>)
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.next + 1}</a></li>)
        } else if (props.next == 0){
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.previous - 1}</a></li>)
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.previous}</a></li>)
            pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
        } else {
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.previous}</a></li>)
            pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.next}</a></li>)
        }
    } else if (props.pages == 2) {
        if (props.previous == 0) {
            pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.next}</a></li>)
        } else if (props.next == 0){
            pageElements.push(<li className="page-item"><a className="page-link" href="#">{props.previous}</a></li>)
            pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
        }
    } else {
        pageElements.push(<li className="page-item active"><a className="page-link" href="#">{props.current} <span className="sr-only">(current)</span></a></li>)
    }
    return pageElements
    
}

export default Pagination;