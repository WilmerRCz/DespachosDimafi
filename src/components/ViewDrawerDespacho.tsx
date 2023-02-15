import { useState } from 'react'
import { Drawer } from "antd";

function ViewDrawerDespacho( viewDrawer:any ) {
  const [open, setOpen] = useState(viewDrawer);


  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        title="Despacho"
        placement={"right"}
        width={400}
        onClose={onClose}
        open={open}
      >
        <div className="border-2 border-slate-100 rounded h-full">
          <div className="p-2">
            <p className="text-slate-500">Nro</p>
            <p className="text-slate-800">{}</p>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default ViewDrawerDespacho