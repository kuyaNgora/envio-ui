export interface ChildProps {
  url?: string;
  icon?: React.ComponentType<any>;
  label: string;
  desciption?: string;
  active: string;
  disabled?: boolean;
}

export interface MenuProps {
  url?: string;
  icon?: React.ComponentType<any>;
  label: string;
  active: string;
  disabled?: boolean;
  isDropdown?: boolean;
  child?: ChildProps[];
}
