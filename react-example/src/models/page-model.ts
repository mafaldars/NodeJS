export interface PageModel<T> {
    count: number;
    page: number;
    size: number;
    totalPages: number;
    pageRecords: number;
    records: T[];
}