import { Link, LinkProps, useResolvedPath, useMatch } from 'react-router-dom';

export function CustomLink({ children, to, ...props }: LinkProps) {

    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true});

    return (
        <Link to={to} {...props} className={match ? props.className?.concat(' active') : props.className}>
            {children}
        </Link>
    )
}