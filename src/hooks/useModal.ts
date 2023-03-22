import { useState } from 'react';

export default function useModal(){
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    open,
    showDrawer,
    onClose
  }
}