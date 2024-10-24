import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';  
import FileUploadPage from '../pages/FileUploadPage';
import FileSearchPage from '../pages/FileSearchPage';
import PreviewAndDownloadPage from '../pages/PreviewAndDownloadPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />  
      <Route path="/upload" element={<FileUploadPage />} />
      <Route path="/search" element={<FileSearchPage />} />
      <Route path="/preview" element={<PreviewAndDownloadPage files={[]} />} />
    </Routes>
  );
}

export default AppRoutes;
