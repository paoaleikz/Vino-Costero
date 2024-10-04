export const USERS = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'operario', password: 'operario123', role: 'operario' },
    { id: 3, username: 'supervisor', password: 'supervisor123', role: 'supervisor' }
  ];
  
export const ROLES = [
    { role: 'admin', permissions: ['dashboard', 'manage-vineyards', 'manage-users'] },
    { role: 'operario', permissions: ['dashboard', 'view-vineyards'] },
    { role: 'supervisor', permissions: ['dashboard', 'view-vineyards', 'report-vineyards'] }
  ];
