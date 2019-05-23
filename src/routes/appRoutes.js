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

import Usuarios from '../views/Users';

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
    path: '/reportes',
    component: Reportes,
    permissions: 'CONTABLE',
    exact: true
  },
  {
    path: '/usuarios',
    component: Usuarios,
    permissions: 'CONTABLE',
    exact: true
  },
  {
    path: '/configuracion',
    component: Configuration,
    permissions: 'CONTABLE',
    exact: true
  }
];

export { publicRoutes, privateRoutes };
