import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./hooks/useAuth";
import { App } from "./App";

import './styles/index.scss';
import { SearchProvider } from "./hooks/useSearch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <AuthProvider>
      <SearchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>
  </StrictMode>
);