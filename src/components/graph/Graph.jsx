import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Chart from "react-google-charts";
import { useParams } from "react-router-dom"

function Graph() {

    const { id } = useParams();
    // console.log(id);

    const [Data, setData] = useState(null);
    const [cus, setCus] = useState(null);

    const [chartData, setChartData] = useState()



    async function getData(id) {

        const trans = await axios.get(`http://localhost:3000/transactions`)
        const customers = await axios.get(`http://localhost:3000/customers/${id}`)
        // let it = [];
        // trans.data.map(tran => {
        let filterd = trans.data.filter(cus => cus.customer_id == id)

        let tmp = []
        filterd.map(item => {
            let tt = [item.date, item.amount]
            tmp.map(term => {
                if (item.date === term[0]) {
                    term[1] += item.amount
                } else {
                    tmp.push(tt)
                }
            })

            if (tmp.length === 0) {
                tmp.push(tt)
            }


        })

        const data = [
            ["date", "total transactions"],
            ...tmp
        ];


        setChartData(data)

        setData(filterd)
        setCus(customers.data)

    }


    useEffect(() => {
        getData(id);

    }, [])




    const options = {
        chart: {
            title: "total transactions per day",
            subtitle: "",

        },
    };



    return (
        <>
            {
                (Data && chartData) && <div className="px-20 py-5 text-white">
                    customer name: {cus.name}
                    <div className="mt-10">
                        <Chart
                            chartType="Bar"
                            width="100%"
                            height="400px"
                            backgroundColor='#000'
                            options={options}
                            data={chartData}
                        />
                    </div>

                </div>
            }

        </>
    )
}

export default Graph