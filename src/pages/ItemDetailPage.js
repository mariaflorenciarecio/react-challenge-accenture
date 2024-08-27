import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getItemsById } from "../firebase/firebaseClient"
import ItemDetail from "../components/ItemDetail/ItemDetail"
import Spinner from "../components/Spinner/Spinner"

const ItemDetailPage = () => {
    const { itemId } = useParams();
    const [item, setItems] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true)
        getItemsById(itemId).then((data) => {
            setItems(data)
            setSpinner(false)
        })
    }, []);

    return (
        <>
            {spinner
                ? <Spinner />
                : (<ItemDetail key={item.id} item={item}></ItemDetail>)
            }
        </>
    );
};

export default ItemDetailPage;