export interface header {
  tittle ?: string;
  base ?: string;
  base2 ?: string;
  base3 ?: string;
  base4 ?: string;
  showAsTab ?: boolean;
  separateRoute ?: boolean;
  route ?: string;
  menu ?: menu[];
}
export interface routerModel {
  event ?: string; 
}
export interface menu {
  menuValue ?: string;
  img ?: string;
  route ?: string;
  hasSubRoute ?: boolean;
  showSubRoute ?: boolean;
  page ?: string;
  last ?: string;
  base ?: string;
}
export interface url { 
  url : string;
}