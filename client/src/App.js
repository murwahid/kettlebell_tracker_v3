import './App.css';
import AddForm from './components/AddForm';
import DashboardView from './views/DashboardView';
import BasicCard from './components/BasicCard';
// CHECK YOUR CHART COMPONENT
import Chart from './components/Chart';
import Home from './components/Home';
import Card from '@mui/material/Card';
import TinyBarChart from './components/TinyBarChart';
import CustomChart from './components/CustomChart';
import StopWatch from './components/StopWatch';
import DataTable from './components/DataTable';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TestCardView from './views/TestCardView';
import TestDrawer from './components/TestDrawer';
import AnalyticsView from './views/AnalyticsView';






function App() {
  return (
    <div className="App">
      {/* <Box
        sx={{
          display: 'flex'
        }}
      >
          <DashboardView />
      </Box> */}
      <div class="mb-5">
        <TestDrawer />
      </div>
      {/* <NavBar/> */}
      <div>
        <DashboardView />
        {/* <AnalyticsView/> */}
      </div>



      {/* <TestCardView/> */}
      {/* <BasicCard/> */}
      {/* <Chart/> */}
      {/* <CustomChart/> */}

      {/* <Home/> */}
      {/* <TinyBarChart/> */}
      {/* <StopWatch/> */}
    </div>
  );
}

export default App;
