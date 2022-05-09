import { Link } from 'react-router-dom';
import { Loading } from '../components/layout/Loading';
import { Paginator } from "../components/layout/Paginator";
import { useFetch } from "../hooks/useFetch";
import { PageModel } from '../models/page-model';
import { Product } from '../models/product';

export function Products() {
    const { data, isLoading } = useFetch<PageModel<Product>>('/products');

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Products</h5>
                <button type="button" className="btn btn-sm btn-primary">Create Product</button>
            </div>

            <div className="list-group list-group-flush">
                {data?.records.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`} className="list-group-item">
                        {product.name}
                    </Link>
                ))}
            </div>

            <div className="card-footer d-flex justify-content-between">
                <Paginator totalPages={3} onPageChange={() => {}} onSizeChange={() => {}} />
            </div>
        </section>
    );
}