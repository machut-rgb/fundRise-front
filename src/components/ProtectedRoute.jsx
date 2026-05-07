import { Navigate, Outlet } from 'react-router-dom'

// Outlet = les routes enfants s'affichent ici
function ProtectedRoute({ requiredRole = null }) {
  const token = localStorage.getItem('token')
  const user  = JSON.parse(localStorage.getItem('user') || 'null')

  // Pas connecté → rediriger vers /login
  if (!token) return <Navigate to="/login" replace />

  // Mauvais rôle → rediriger vers le dashboard correspondant
  if (requiredRole && user?.role !== requiredRole && requiredRole !== 'all') {
    const dashboards = {
      admin:       '/admin',
      owner:       '/owner',
      contributor: '/dashboard',
    }
    return <Navigate to={ dashboards[user.role] || '/' } replace />
  }

  return <Outlet />   // ✅ accès autorisé → afficher la route enfant
}

export default ProtectedRoute