interface PaginatorProps {
    totalPages: number;
    sizes?: number[];
    onPageChange: (page: number) => void;
    onSizeChange: (size: number) => void;
}

export function Paginator({ totalPages, onPageChange, onSizeChange, sizes = [5, 10, 20]}: PaginatorProps) {
    return (
        <>
            <ul className="pagination pagination-sm">
                {[...new Array(totalPages)].map((_, i) => (
                    <li className="page-item" key={i}>
                        <button className="page-link" onClick={() => onPageChange(i)}>{i + 1}</button>
                    </li>
                ))}
            </ul>

            <select className="form-select form-select-sm w-auto" onChange={({target: {value}}) => onSizeChange(Number(value))}>
                {sizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
        </>
    )
}