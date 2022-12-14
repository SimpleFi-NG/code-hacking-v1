export type ThemeMode = "light" | "dark";

export type UserType = {
  email: string;
  name: string;
  password: string;
  avatar?: string;
  id: number;
};

export type ContactType = {
  firstname: string;
  lastname: string;
  middleName?: string;
  phoneNumber: string;
  emailAddress?: string;
  address?: string;
  id: string;
};

export type ApiResponse<T> = {
  status: number;
  success: boolean;
  message: string;
  data?: T;
  error?: Error;
};

export type AlertType = {
  open: boolean;
  status?: "success" | "error" | "info";
  message?: string;
};

export type AuthPayload = {
  accessToken: string;
  user: {
    email: string;
    name: string;
    avatar: string;
    id: number;
  };
};

export type TableRowType = {
  [key: string]: any;
};

export type TableColumnType<T> = {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (TableRenderParams: {
    value: any;
    colIndex: number;
    rowIndex: number;
    row: T | TableRowType;
  }) => any;
};

export enum StorageKey {
  theme = "PhoneBook_Theme",
  user = "PhoneBook_User",
}
