import { FetchStatus } from "@/api/services/Status";
import { useEffect, useState } from "react";
import { StyledBox, StyledH, StyledTitle, UptimeStatus } from "./styles";

export default function Status() {
    const [status, setStatus] = useState([])
    const [intervalId, setIntervalId] = useState(0)
    const [avg, setAvg] = useState(0)

    const fetchData = () => {
        const requestStart = new Date();
        FetchStatus().then((data) => {
            const currentTime = new Date();
            data.latency = currentTime - requestStart;
            data.time = currentTime;
            setStatus(oldArray => [...oldArray, data]);
        }).catch((error) => {
            console.error("Error in FetchStatus:", error);
            if (error.message == "Network Error") {
                console.error("Too Many Requests (429) Error:", error);
            }
        });
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
                        status && status.map((item, index) => {
                            return (
                                <UptimeStatus key={index} isok={item.status} />
                            )
                        })
                    }
                </StyledBox>
            </div>

        </div>
    )
}