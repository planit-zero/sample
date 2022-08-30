import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Point from './point';
import PointDetail from './point-detail';
import PointUpdate from './point-update';
import PointDeleteDialog from './point-delete-dialog';

const PointRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Point />} />
    <Route path="new" element={<PointUpdate />} />
    <Route path=":id">
      <Route index element={<PointDetail />} />
      <Route path="edit" element={<PointUpdate />} />
      <Route path="delete" element={<PointDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default PointRoutes;
