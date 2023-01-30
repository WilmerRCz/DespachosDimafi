import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  privilegio: number | null;
  isAuth: Boolean;
};
type Actions = {
  setToken: (token: string) => void;
  setPrivilegio: (privilegio: number) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
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
          token: "",
          privilegio: null,
          isAuth: false,
        })),
    }),

    {
      name: "auth",
    }
  )
);
