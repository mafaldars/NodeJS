import { useAuth } from "../../hooks/useAuth";
import { useSearch } from "../../hooks/useSearch";
import { CustomLink } from "../routing/CustomLink";

interface HeaderProps {
    openLoginModal: () => void;
}

export function Header({ openLoginModal }: HeaderProps) {

    const { isLoggedIn, logout } = useAuth();
    const { search } = useSearch();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0 h1">Products App</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/">
                                Dashboard
                            </CustomLink>
                        </li>

                        {isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <CustomLink className="nav-link" to="/customers">Customers</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className="nav-link" to="/products">Products</CustomLink>
                                </li>
                            </>
                        )}
                    </ul>
                    
                    {isLoggedIn && (
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={e => search(e.target.value)} />
                        </form>
                    )}

                    {isLoggedIn ? (
                        <button type="button" className="btn btn-outline-light" onClick={logout}>Logout</button>
                        ) : (
                        <button type="button" className="btn btn-outline-light" onClick={openLoginModal}>Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
}