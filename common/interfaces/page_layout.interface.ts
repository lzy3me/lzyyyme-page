import { ReactNode } from "react";
import { PageList } from "./pagelist.interface";

export interface Props {
  children?: ReactNode;
  title?: string;
  description?: string;
  navbar?: boolean;
  pagename?: string;
  page_list?: PageList[];
}