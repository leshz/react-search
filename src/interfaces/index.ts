export interface submitData {
  value: string;
  type: number;
}

export interface searchBoxProps {
  title: string;
  search: submitData;
  data: ConsiliationArray;
}

export interface ConsiliationArray extends Array<Conciliation> {
  [index: number]: Conciliation;
}

export interface dateStamps {
  createdAt: string;
  updateAt: string;
}
export interface Conciliation {
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

export interface ConciliationItemProps extends Conciliation {
  selected?: string;
}
