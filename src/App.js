import GlobalStyle from './assets/styles/GlobalStyle';
import Routes from './routes';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <div className="app-container">
      <ReactNotification />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
