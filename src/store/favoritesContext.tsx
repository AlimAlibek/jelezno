
import { createContext, useState } from "react";

type State = {
    favorites: API.Album[],
    saveToFavorites: (item: API.Album) => void,
    removeFromFavorites: (item: API.Album) => void
}

export const FavoritesContext = createContext<State>({
    favorites: [],
    saveToFavorites: () => {},
    removeFromFavorites: () => {}
});

export const FavoritesProvider = ({children}: {children: React.JSX.Element}) => {

    const [favorites, setFavorites] = useState<API.Album[]>([]);

    const saveToFavorites = (item: API.Album) => {
        setFavorites([...favorites, item]);
    }

    const removeFromFavorites = (item: API.Album) => {
        setFavorites(favorites.filter(f => f.id !== item.id));
    }

    return (
        <FavoritesContext.Provider value={{favorites, saveToFavorites, removeFromFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}
