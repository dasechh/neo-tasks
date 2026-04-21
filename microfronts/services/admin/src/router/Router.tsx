import {Children, Suspense} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {App} from '@/components/App';
import {AboutLazy} from '@/pages/about/About.lazy';

const routes = [
  {
    element: <App />,
    children: [
      {
        index:true,
        element: (
          <Suspense fallback={'loading... '}>
            <AboutLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default routes;
 