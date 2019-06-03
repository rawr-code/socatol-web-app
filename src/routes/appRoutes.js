// Views

// Public
import Login from '../views/Login';

// Private
import Incomes from '../views/Incomes';
import Expenses from '../views/Expenses';
import Inventory from '../views/Inventory';
import Treasury from '../views/Treasury';
import Configuration from '../views/Configuration';
import Reportes from '../views/Reportes';
import Contactos from '../views/Contactos';
import Admin from '../views/Admin';

const publicRoutes = [
  {
    path: '/',
    component: Login,
    permissions: '',
    exact: true,
    refetch: true
  }
];

const privateRoutes = [
  {
    path: '/',
    component: Inventory,
    permissions: ['CONTABLE', 'CONSULTOR'],
    exact: true
  },
  {
    path: '/base-de-datos',
    component: Admin,
    permissions: ['ADMINISTRADOR'],
    exact: true
  },
  {
    path: '/ingresos',
    component: Incomes,
    permissions: ['CONTABLE', 'CONSULTOR']
  },
  {
    path: '/gastos',
    component: Expenses,
    permissions: ['CONTABLE', 'CONSULTOR']
  },
  {
    path: '/inventario',
    component: Inventory,
    permissions: ['CONTABLE', 'CONSULTOR']
  },
  {
    path: '/tesoreria',
    component: Treasury,
    permissions: ['CONTABLE']
  },
  {
    path: '/reportes',
    component: Reportes,
    permissions: ['CONTABLE'],
    exact: true
  },
  {
    path: '/contactos',
    component: Contactos,
    permissions: ['CONTABLE', 'CONSULTOR'],
    exact: true
  },
  {
    path: '/configuracion',
    component: Configuration,
    permissions: ['CONTABLE'],
    exact: true
  }
];

export { publicRoutes, privateRoutes };
