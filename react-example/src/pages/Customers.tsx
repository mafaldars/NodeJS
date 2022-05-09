import { Link } from 'react-router-dom';
import { Loading } from '../components/layout/Loading';
import { Paginator } from "../components/layout/Paginator";
import { useFetch } from "../hooks/useFetch";
import { Customer } from '../models/customer';
import { PageModel } from '../models/page-model';

export function Customers() {
    const { data, isLoading } = useFetch<PageModel<Customer>>('/customers');

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Customers</h5>
                <button type="button" className="btn btn-sm btn-primary">Create Product</button>
            </div>

            <div className="list-group list-group-flush">
                {data?.records.map(customer => (
                    <Link key={customer.id} to={`/customers/${customer.id}`} className="list-group-item">
                        {customer.name}
                    </Link>
                ))}
            </div>

            <div className="card-footer d-flex justify-content-between">
                <Paginator totalPages={3} onPageChange={() => {}} onSizeChange={() => {}} />
            </div>
        </section>
    );
}