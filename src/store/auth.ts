import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  privilegio: number | null;
  isAuth: Boolean;
  user: string | null
  openToggleSidebar: Boolean | any
};
type Actions = {
  setToken: (token: string) => void;
  setUser: (user: string) => void,
  setPrivilegio: (privilegio: number) => void;
  logout: () => void;
  setOpenToggleSidebar: (openToggleSidebar: Boolean) => void
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      user: '',
      setUser: (user: string) =>
        set((state) => ({
          user
        })),
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      privilegio: null,
      setPrivilegio: (privilegio: number) =>
        set((state) => ({
          privilegio,
        })),
      logout: () =>
        set((state) => ({
          token: '',
          user: null,
          privilegio: null,
          isAuth: false,
          openToggleSidebar: false,
        })),
        openToggleSidebar: true,
        setOpenToggleSidebar: (openToggleSidebar: Boolean) => set ((state) => ({
          openToggleSidebar
        }))
    }),

    {
      name: "auth",
    }
  )
);
