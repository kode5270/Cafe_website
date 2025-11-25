import { useEffect, useState } from "react";
import { getOrders, updateOrders } from "../../../services/order.service";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./ListOrder.module.css"
import type { IOrder } from "../../../types/order";
import { removeLocalStorage } from "../../../utils/storage";

const ListOrder = () => {
    const [orders,setOrders] = useState([])
    const [refecthOrders,setRefecthOrders] = useState<boolean>(true)
    
    useEffect ( () => {
        if(refecthOrders){
            const fetchOrder = async () => {
                const result = await getOrders();
                setOrders(result.data)
            }
            fetchOrder();
            setRefecthOrders(false);
        }
    },[refecthOrders])

    const handleComplateOrder = async (id : string) =>{
        await updateOrders(id, {status : "COMPLETED"}).then(() => {
            setRefecthOrders(true)
        })
    }
    const navigate = useNavigate() ;
    const handleLogOut = () =>{
        removeLocalStorage('auth');
        return navigate('/login');
    }



    return <main className={styles.Order}>
        <section className={styles.Header}>
            <h1 className={styles.Title}>Order List</h1>
            <div className={styles.Button}>
                <Link to='/create'>
                    <Button>Create</Button>
                </Link>
                <Link to='/Login'>
                <Button color="secondary" onClick={handleLogOut}>Log Out</Button>
                </Link>
            </div>
        </section>
        <section className={styles.container}>
            <table
            border={1} 
            className={styles.table}
            cellSpacing={0}
            cellPadding={10}
            >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Customer Name</th>
                        <th>Table</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orders : IOrder, index : number) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{orders.customer_name}</td>
                            <td>{orders.table_number}</td>
                            <td>{orders.total}</td>
                            <td>{orders.status}</td>
                            <td className={styles.action}>
                                <Link to={`/orders/${orders.id}`}>
                                    <Button>Detail</Button>
                                </Link>
                                {orders.status === "PROCESSING" && (
                                    <Button onClick={() => handleComplateOrder(orders.id)}>Complete</Button>
                                )
                                }
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    </main> ;
}
export default ListOrder;