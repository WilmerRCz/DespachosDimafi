
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import ViewDrawerDespacho from "./viewDrawerDespacho";



function ButtonEditInTable(record:any) {
  const showDrawer = () => {
    return true;
  };


  return (
    <div>
      <button>
        <FiEye
          size={19}
          onClick={() => {
            alert(JSON.stringify(record));
            <ViewDrawerDespacho viewDrawer={showDrawer()}/>
          }}
        />
      </button>
        
    </div>
  );
}

export default ButtonEditInTable;
