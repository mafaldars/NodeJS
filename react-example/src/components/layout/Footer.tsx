export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center border-top text-muted p-4 mt-4">
            Copyright &copy; {year}
        </footer>    
    );
}