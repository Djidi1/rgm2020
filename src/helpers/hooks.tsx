import { useState, useCallback } from 'react';

const useToggle = (initial: boolean): [boolean, () => void] => {
  const [open, setOpen] = useState<boolean>(initial);

  const toggle = useCallback(() => setOpen((status) => !status), []);

  return [open, toggle];
};

export default useToggle;
