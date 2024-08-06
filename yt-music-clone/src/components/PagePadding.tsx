import React, { ReactNode } from 'react';

const PagePadding = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>
  );
};

export default PagePadding;