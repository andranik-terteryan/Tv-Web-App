import React from 'react';
import './assets/styles/main.scss';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './pages/home/Home';
import { VideoProvider } from './context/VideoContext';
function App() {
  return (
    <>
      <VideoProvider>
        <MainLayout>
          <Home />
        </MainLayout>
      </VideoProvider>

    </>
  );
}

export default App;
