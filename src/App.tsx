import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default App;
