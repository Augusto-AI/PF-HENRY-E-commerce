import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'PF - eCommerce';
    }
  }, [title]);
};

export default useDocumentTitle;
