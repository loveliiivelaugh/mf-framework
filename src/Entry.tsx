import App from './components/Mui/Dashboard/Dashboard';
import Providers from './components/custom/providers/Providers';
import './styles/index.css'; // Optional CSS file

const AppEntry = () => {
    return (
        <Providers path={(paths) => `${paths.notion}/list`}>
            {(init: any) => <App initialData={init} />}
        </Providers>
    );
};

export default AppEntry;
