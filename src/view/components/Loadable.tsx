import { lazy, Suspense } from 'react';
import LoadingIndicator from './LoadingIndicator';

interface Props {
  [key: string]: any;
}

type LazyComponent = ReturnType<typeof lazy>;

const Loadable = (Component: LazyComponent) => (props: Props) => (
  <Suspense fallback={<LoadingIndicator />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
