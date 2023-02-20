import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  name: string | null
  privilegio: number | null
  sucursal: string | null
  openToggleSidebar: Boolean | any
};
type Actions = {
  setUser: (user: string) => void,
  setPrivilegio: (privilegio: number) => void,
  setSucursal: (sucursal: string) => void,
  logout: () => void;
  setOpenToggleSidebar: (openToggleSidebar: Boolean) => void
};

export const useUserStore = create(
  persist<State & Actions>(
    (set) => ({
      name: '',
      privilegio: null,
      sucursal: '',
      setUser: (name: string) =>
        set((state) => ({
          name
        })),
        setPrivilegio: (privilegio: number) =>
        set((state) => ({
          privilegio
        })),
        setSucursal: (sucursal: string) =>
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
        openToggleSidebar: true,
        setOpenToggleSidebar: (openToggleSidebar: Boolean) => set ((state) => ({
          openToggleSidebar
        }))
    }),

    {
      name: "user",
    }
  )
);