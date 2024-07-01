import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode | null;
};

export interface PlaylistBar {
  isActive: boolean;
  callBack: () => void;
}
