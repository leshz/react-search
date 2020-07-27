export interface submitData {
  value: string;
  type: number;
}
export interface searchBoxProps {
  title: string;
  search: submitData;
  type: number;
  data: Conciliacion[] | Usuario[] | Tablero[] | Fuente[];
}
export interface dateStamps {
  createdAt: string;
  updateAt: string;
}
export interface Conciliacion {
  _id: string;
  index: number;
  isActive: boolean;
  conciliationName: string;
  sourceA: string;
  sourceB: string;
  balance: string;
  timestamp: dateStamps;
  description: string;
  tags: string[];
}

export interface Fuente {
  _id: string;
  index: number;
  isActive: boolean;
  name: string;
  company: string;
  timestamp: dateStamps;
  description: string;
  tags: string[];
}

export interface Tablero {
  _id: string;
  index: number;
  isActive: boolean;
  dashboardName: string;
  visualType: VisualTypes;
  visuals: Visuals;
  timestamp: dateStamps;
  description: string;
  tags: string[];
}

export interface Usuario {
  _id: string;
  index: number;
  isActive: boolean;
  picture: string;
  age: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  tags: string[];
}

interface usersArray extends Array<Usuario> {
  [index: number]: Usuario;
}
interface Visuals extends Array<Visual> {
  [index: number]: Visual;
}
interface VisualType {
  name: string;
}
interface Visual {
  name: string;
  type: string;
}
export interface VisualTypes extends Array<VisualType> {
  [index: number]: VisualType;
}

export interface ConciliationItemProps extends Conciliacion {
  selected?: string;
}

export interface BoardItemProps extends Tablero {
  selected?: string;
}

export interface SourceItemProps extends Fuente {
  selected?: string;
}
export interface UserItemProps extends Usuario {
  selected?: string;
}
