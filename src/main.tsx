import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalContext } from './context/GlobalContext.tsx'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContext>
    </QueryClientProvider>
  </StrictMode>,
)
