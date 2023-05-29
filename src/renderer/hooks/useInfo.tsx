import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { Info, info, Item } from "shared/data/info";

const InfoContext = createContext<{
  items: Item[];
  categoryInfo: Omit<Info[string], "data">;
  filter: string;
  setFilter: (str: string) => void;
}>({
  items: [],
  filter: "exterior",
  setFilter: () => {},
  categoryInfo: {
    image: "",
  },
});

export const InfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filter, setFilter] = useState("exterior");

  const items = useMemo(() => {
    return info[filter]?.data;
  }, [filter]);

  const categoryInfo = useMemo(() => {
    const { data, ...rest } = info[filter];
    return { ...rest };
  }, [filter]);

  const data = useMemo(
    () => ({
      items,
      categoryInfo,
      filter,
      setFilter,
    }),
    [items, filter, setFilter]
  );
  return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>;
};

export const useInfo = () => {
  return useContext(InfoContext);
};
