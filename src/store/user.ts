import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  name: string | null
  privilegio: number | null
  sucursal: number | null
  openToggleSidebar: Boolean | any
};
type Actions = {
  setName: (user: string) => void,
  setPrivilegio: (privilegio: number) => void,
  setSucursal: (sucursal: number) => void,
  logout: () => void;
  setOpenToggleSidebar: (openToggleSidebar: Boolean) => void
};

export const useUserStore = create(
  persist<State & Actions>(
    (set) => ({
      name: '',
      privilegio: null,
      sucursal: null,
      setName: (name: string) =>
        set((state) => ({
          name
        })),
        setPrivilegio: (privilegio: number) =>
        set((state) => ({
          privilegio
        })),
        setSucursal: (sucursal: number) =>
        set((state) => ({
          sucursal
        })),
      logout: () =>
        set((state) => ({
          name: null,
          privilegio: null,
          sucursal: null,
          openToggleSidebar: false,
        })),
        openToggleSidebar: false,
        setOpenToggleSidebar: (openToggleSidebar: Boolean) => set ((state) => ({
          openToggleSidebar
        }))
    }),

    {
      name: "user",
    }
  )
);