export interface HamburgerProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setFadeOut: React.Dispatch<React.SetStateAction<boolean>>;
}
