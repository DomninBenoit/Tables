import "./style.scss";
import Tables from "../../lib/Tables";
import datas from "../../services/data/user.json";
import columns from "../../services/data/columns";

function App() {
  return <Tables datas={datas} columns={columns} />;
}

export default App;
