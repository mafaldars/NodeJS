import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthResponse } from "../models/auth-response";
import { User } from "../models/user";
import { api } from "../services/api";

interface AuthContextData {
    user?: User;
    token?: string | null;
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | undefined>();
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    async function login(email: string, password: string) {
        try {
            const { data } = await api.post<AuthResponse>('/auth/login', { email, password });
            setToken(data.token);
        } catch (err) {
            throw err;
        }
    }

    function logout() {
        setToken('');
        setUser(undefined);
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isLoggedIn: !!token}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}