import "./style.css";
import Sidebar from "./components/sidebar/sidebar"
import Main from './components/main/main'
import { ThemeProvider } from "@material-ui/core";
import theme from './theming/default-theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Sidebar icon="user pp" title="mytitle" />
        <Main />
      </ThemeProvider>
    </div>
  );
}
export default App;
