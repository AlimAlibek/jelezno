import { Link } from "react-router-dom";
import List from "../../components/List/List";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favoritesContext";
import s from '../style.module.scss'


const Dashboard: React.FC = () => {

    const {favorites} = useContext(FavoritesContext);

    return <>
        <div className={s.header}>
            <Link to="/list" >List</Link>
        </div>
        <List list={favorites} />
    </>
}


export default Dashboard;
