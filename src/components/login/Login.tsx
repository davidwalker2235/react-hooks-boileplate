import React, { FC, ReactNode } from 'react';

export interface SimpleDialogProps {
  children?: ReactNode;
}

const Login: FC<SimpleDialogProps> = () => {

  return     (
    <div>
      Login component
    </div>)
}

export default Login;