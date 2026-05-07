import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from "react";
import C from "./constants/colors";
import Fonts from "./components/ui/Fonts";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import ContributorDashboard from "./pages/ContributorDashboard";
import ProjectView from "./pages/projects/ProjectView";
import CreateProject from "./pages/projects/CreateProject";
import DepositPage from "./pages/DepositPage";
import ProtectedRoute from "./components/ProtectedRoute";
import "./style.css";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Routes publiques ───────────────────────────── */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ── Routes protégées — wrappées dans ProtectedRoute ────── */}
        <Route element={<ProtectedRoute requiredRole="admin" />}>
          <Route path="/admin/deposit/:userId" element={<DepositPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        <Route element={<ProtectedRoute requiredRole="owner" />}>
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/projects/create" element={<CreateProject />} />
        </Route>
        <Route element={<ProtectedRoute requiredRole="contributor" />}>
          <Route path="/dashboard" element={<ContributorDashboard />} />
        </Route>

        <Route element={<ProtectedRoute requiredRole="all" />}>

          {/* Route dynamique — :id capturé par useParams */}
          <Route path="/projects/:id" element={<ProjectView />} />

        </Route>

        {/* 404 — redirection vers l'accueil */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
