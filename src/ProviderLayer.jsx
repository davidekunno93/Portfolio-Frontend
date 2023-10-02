import App from './App.jsx'
import DataProvider from './Context/DataProvider'

const ProviderLayer = () => {
    return (
        <DataProvider>
            <App />
        </DataProvider>
    )
}
export default ProviderLayer;