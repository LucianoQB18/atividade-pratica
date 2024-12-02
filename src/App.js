import { Login } from "@mui/icons-material";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import TemporaryDrawer from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <ListarTarefa />
      <TemporaryDrawer />
    </div>
  );
}

export default App;
