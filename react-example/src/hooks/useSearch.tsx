import { createContext, ReactNode, useContext, useState } from "react";

interface SearchContextData {
    filter?: string;
    search: (searchTerm: string) => void;
}

interface SearchProviderProps {
    children: ReactNode;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps) {
    const [filter, setFilter] = useState('');
    return (
        <SearchContext.Provider value={{ filter, search: setFilter }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const context = useContext(SearchContext);
    return context;
}