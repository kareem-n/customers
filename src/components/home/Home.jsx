import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react"

import { TbCaretUpDownFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


function Home() {


    const [Data, setData] = useState(null);
    const [isUp, setIsUp] = useState(false);


    async function getData() {

        const trans = await axios.get(`http://localhost:3000/transactions`)
        const customers = await axios.get("http://localhost:3000/customers")

        let it = [];
        trans.data.map(tran => {

            // console.log(customers.data.filter(cus => cus.id == tran.customer_id));
            let filterd = customers.data.filter(cus => cus.id == tran.customer_id)

            filterd = { ...tran, ...filterd[0], ['id']: tran.id }
            // console.log({ ...tran, ...filterd[0], ['id']: tran.id });

            it.push(filterd)

        });
        // console.log(it);
        setData(it)

    }


    function filterByName(q) {
        let tmp = Data.sort((a, b) => {

            if (q) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            } else {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            }

        })
        setData(tmp);
        setIsUp(!isUp)

    }
    function filterByAmount(q) {
        let tmp = Data.sort((a, b) => {

            if (q) {
                return a.amount - b.amount
            } else {
                return b.amount - a.amount
            }

        })
        setData(tmp);
        setIsUp(!isUp)

    }


    useEffect(() => {

        getData()


    }, [])


    return (

        <>
            {
                Data && <div className="relative overflow-x-auto p-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-xl overflow-hidden">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Transaction ID
                                </th>

                                <th scope="col"
                                    onClick={() => {
                                        filterByName(isUp)
                                    }}
                                    className="px-6 py-3   select-none">
                                    <span className="flex items-center cursor-pointer">
                                        <TbCaretUpDownFilled size={22} className="mr-2 " />
                                        customer name
                                    </span>

                                </th>

                                <th scope="col"
                                    onClick={() => {
                                        filterByAmount(isUp)
                                    }}
                                    className="px-6 py-3 select-none ">
                                    <span className="flex items-center cursor-pointer">
                                        <TbCaretUpDownFilled size={22} className="mr-2 " />
                                        Amount
                                    </span>

                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Transaction date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Customer ID
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Data.map((tr, key) => <tr key={key} className="hover:bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 w-full bg-yellow-300">
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {tr.id}
                                    </td>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <Link to={`/graph/${tr.customer_id}`} className="underline hover:text-blue-800">
                                            {tr.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        {tr.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tr.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        {tr.customer_id}
                                    </td>

                                </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            }
        </>



    )
}

export default Home