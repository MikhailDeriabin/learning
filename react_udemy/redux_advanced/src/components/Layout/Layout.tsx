import {Fragment, ReactNode} from 'react';
import MainHeader from './MainHeader';

type Props = {
    children?: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
