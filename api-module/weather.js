import axios from "axios"
import { APIURL } from "../constants"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function Weather() {
    const [temp, setTemp] = React.useState(0)
    const [max, setMax] = React.useState(0)
    const [min, setMin] = React.useState(0)

    axios.get(APIURL + "/api/weather", { withCredentials: true }).then(function (response) {
        setTemp(response.data.Temp)
        setMax(response.data.Max)
        setMin(response.data.Min)
    })

    return (
        <>
            <div class="flex-grow text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faCloud} size="6x" /></div>
            <div class="flex-grow font-medium py-4 px-4 text-5xl">{temp}°</div>
            <div class="flex-grow font-medium py-4 px-2 text-5xl">
                <div class="font-normal text-sm pl-2">
                    맑음
                </div>
                <div class="font-normal text-sm pl-2">
                    {max}°/{min}°
                </div>
            </div>
        </>
    )
}

export function MaxMin() {
    // 21°/14°
}