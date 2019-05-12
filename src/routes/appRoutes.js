// Views

// Public
import Login from '../views/Login';

// Private
import Incomes from '../views/Incomes';
import Expenses from '../views/Expenses';
import Inventory from '../views/Inventory';
import Treasury from '../views/Treasury';
import Configuration from '../views/Configuration';

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
    permissions: 'CONTABLE',
    exact: true
  },
  {
    path: '/ingresos',
    component: Incomes,
    permissions: 'CONTABLE'
  },
  {
    path: '/gastos',
    component: Expenses,
    permissions: 'CONTABLE'
  },
  {
    path: '/inventario',
    component: Inventory,
    permissions: 'CONTABLE'
  },
  {
    path: '/tesoreria',
    component: Treasury,
    permissions: 'CONTABLE'
  },
  {
    path: '/configuracion',
    component: Configuration,
    permissions: 'ADMINISTRADOR',
    exact: true
  }
];

export { publicRoutes, privateRoutes };
