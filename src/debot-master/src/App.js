import { Box } from '@mui/material';

import './App.css';
import Workspace from './screens/Workspace';

function App() {
  return (
    <Box style={{ minHeight: '100vh', position: 'relative', backgroundImage: 'linear-gradient(to right,#9faeb8,#eef2f3)' }}>
      <Box pb={10}>
        <Workspace />
      </Box>
    </Box>
  );
}

export default App;
