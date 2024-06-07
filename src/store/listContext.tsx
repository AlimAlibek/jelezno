import { createContext, useState } from "react";

type State = {
  list: API.Album[],
  setList: (list: API.Album[]) => void,
  page: number,
  setPage: (page: number) => void
}
export const ListContext = createContext<State>({
    list: [],
    setList: () => {},
    page: 0,
    setPage: () => {}
});


type Props = {
    children: React.JSX.Element
}

export const ListProvider: React.FC<Props> = ({children}) => {

    const [list, setList] = useState<API.Album[]>([]);
    const [page, setPage] = useState(1);

    return (
        <ListContext.Provider value={{list, setList, page, setPage}}>
          {children}
        </ListContext.Provider>
    )

}
