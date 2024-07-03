import { toggleInfoUseCase } from "~/application/info/toggle-info.use-case";
import { create } from "~/libs/utils/zustand-refactor";

export interface InfoStore {
  isOpen: boolean;
  toggleInfo: (isOpen: boolean) => void;
}

export const useInfo = create<InfoStore>((set) => ({
  isOpen: false,
  toggleInfo: () => {
    set((state) => ({ isOpen: toggleInfoUseCase(state.isOpen) }));
  },
}));
