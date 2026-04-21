import {Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Shop} from '@/pages/shop';
import {App} from '@/components/App';

const routes = [
  {
    element: <App />,
    children: [
      {
        index:true,
        element: (
          <Suspense fallback={'loading... '}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
