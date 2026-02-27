import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MantineProvider>
            <App />
        </MantineProvider>
    </BrowserRouter>
)
