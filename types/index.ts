export type menuItems = menuItem[];

export type menuItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export type BadgeT = {
  className?: string;
  children?: React.ReactNode;
};
