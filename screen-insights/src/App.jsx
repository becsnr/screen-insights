import Dashboard from "./pages/Dashboard";

import { getScreenTimeData } from './services/getScreenTimeData';
// import { getTotalTime } from './src/utils/getTotalTime';

function App() {
  const data = getScreenTimeData();

  // const totalTime = getTotalTime(data[0].apps)

  // console.log(`data: `, data);

  return (
    <>
      <Dashboard data={data} />
    </>
  )
}

export default App
