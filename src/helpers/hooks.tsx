import { useState, useCallback } from 'react';

const useToggle = (initial: boolean): [boolean, () => void] => {
  const [open, setOpen] = useState<boolean>(initial);

  return [open, useCallback(() => setOpen((status) => !status), [])];
};

export default useToggle;
