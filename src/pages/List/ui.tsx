import { useEffect, useState, useContext, useCallback } from "react"
import List from "../../components/List/List"

import { FavoritesContext } from "../../store/favoritesContext";
import { ListContext } from "../../store/listContext";
import { Link } from "react-router-dom";

import s from '../style.module.scss'

const totalCount = 50 // хардкод потому что не удалось получить X-Total-Count

const ListPage: React.FC = () => {

    const {favorites, saveToFavorites, removeFromFavorites} = useContext(FavoritesContext);
    const {list, setList, page, setPage} = useContext(ListContext);

    const [loading, setLoading] = useState(page > 1 ? false : true);

    useEffect(() => {

        if (!loading) {
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`)
            .then(res => res.json())
            .then(json => {
                setList([...list, ...json]);
                setPage(page + 1);
            })
            .finally(() => setLoading(false));

    }, [loading, list, page, setList, setPage]);



    useEffect(() => {
        const scrollPosition = sessionStorage.getItem('scrollPosition');

        if (scrollPosition) {
            window.scrollTo(0, +scrollPosition)
        }

        return () => {
            window.scrollTo(0, 0)
        }
    }, [])


    const handleScroll = useCallback(function handleScroll(event: Event){

        sessionStorage.setItem('scrollPosition', window.scrollY.toString())

        const target = event.target as Document

        if (
          (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 110)
          && list.length < totalCount
        ) {
            setLoading(true)
        }
    }, [list.length])

    useEffect(() => {

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [list, handleScroll])

    const formatedList = list ? list.map(item => ({
        ...item,
        favorite: favorites.findIndex(f => f.id === item.id) === -1 ? false : true
    })) : []


    return (
        <>
            <div className={s.header}>
               <Link to={'/'}>Dashboard</Link>
            </div>
            <List
                list={formatedList}
                saveToFavorites={saveToFavorites}
                removeFromFavorites={removeFromFavorites}
            />
        </>
    )
}

export default ListPage
