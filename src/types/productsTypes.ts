import { ReactNode } from "react";

export interface Product {
  brand: string | null;
  id: string; 
  price: number;
  product: string;
}

export interface ProductsState {
  products: Product[];
  productsId: string[];
  fields: Field[];
  status: null | 'loading' | 'resolved' | 'rejected';
  statusId: null | 'loading' | 'resolved' | 'rejected';
  error: string | null | undefined;
  selectedField: string;
  searchValue: string | number;
  offset: number;
  limit: number;
  page: number;
}

export type Params = ItemsParams | IdsParams | FieldsParams | FilterParams;

export interface APIParams {
  action: string;
  params: Params; 
}

export interface ItemsParams {
  ids: string[];
  field: string;
}

export interface IdsParams {
  offset: number;
  limit: number;
  field: string;
}

export interface FieldsParams {
  field: string;
  offset: number;
  limit: number;
}

export interface FilterParams {
  [x: string]: string | number
}

export interface Header {
  width: number | string;
  head: string;
}

export interface Field {
  id: string | number;
  value: string; 
  label: string; 
  type: string;
}

export type ResponseProduct = Product[];

export type ResponseProductId = string[];

export interface ResponseProductFields {
  searchValue: string;
  selectedField: string;
  result: string[] | null;
}

export interface ResponseProductFilter {
  searchValue: string;
  selectedField: string;
  result: string[];
}

export interface TableHeadProps {
  headers: Header[];
  children: ReactNode;
}




