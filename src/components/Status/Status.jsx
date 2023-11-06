import { FetchStatus } from "@/api/services/Status";
import { useEffect, useState } from "react";
import { StyledBox, StyledH, StyledTitle, UptimeStatus } from "./styles";

export default function Status() {
    const [status, setStatus] = useState([])
    const [intervalId, setIntervalId] = useState(0)
    const [avg, setAvg] = useState(0)
    const [color,setColor] = useState("")

    const fetchData = () => {
        const requestStart = new Date();
        FetchStatus().then((data) => {
            const currentTime = new Date();
            data.latency = currentTime - requestStart;
            data.time = currentTime;
            setStatus(oldArray => [...oldArray, data]);
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }).then((status) => {
            if (status > 399) {
                setColor("red");
            }
        });;
    }
    useEffect(() => {
        if (status.filter((item) => {
            return item.status == "Success"
        }).length > 0) {
            clearInterval(intervalId)
            const sumWithInitial = status.reduce((accumulator, currentValue) => accumulator + currentValue.latency, 0);
            const avg = (sumWithInitial / status.length) || 0;
            setAvg(avg.toFixed(0));
        }
    }, [status])


    useEffect(() => {
        fetchData()
        const intervalId = setInterval(fetchData, 2500)
        setIntervalId(intervalId)
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <StyledTitle>Current API Status</StyledTitle>
            <div>
                <StyledH>Average Latency Time: {avg ? avg : 0}ms </StyledH>
                <StyledBox>
                    {
                        status && status.map((item) => {
                            return (
                                <div key={item.time}>
                                    <UptimeStatus color={color} isOk={item.status == "Success"} />
                                </div>
                            )
                        })
                    }
                </StyledBox>
            </div>

        </div>
    )
}