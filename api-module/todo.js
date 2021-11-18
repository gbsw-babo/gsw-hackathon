import React, { useEffect } from "react"
import { APIURL } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Todo() {
    const [pending, setPending] = React.useState([])
    const [completed, setCompleted] = React.useState([])
    useEffect(() => {
        fetch(APIURL + "/api/gettodo", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
        }).then((res) => res.json()).then((res) => {
            res.forEach((data) => {
                console.log(data)
                if (data.status == "no") {
                    setPending((prev) => [...prev, data])
                } else {
                    setCompleted((prev) => [...prev, data])
                }
            })
        })
    }, [])

    function Delete(id, e) {
        if(id == undefined) {
            
        }
        e.remove()
        var urlencoded = new URLSearchParams();
        urlencoded.append("id", id);

        fetch(APIURL + "/api/removetodo", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
        })
    }

    function Mark(id, e) {
        if(id == undefined) {
            
        }
        e.remove()
        var urlencoded = new URLSearchParams();
        urlencoded.append("id", id);

        fetch(APIURL + "/api/removetodo", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
        })
    }

    function Create(e) {
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Cookie", "session=TdhWPIdWyHmHobpp");

        var urlencoded = new URLSearchParams();
        urlencoded.append("data", e);

        // fetch("http://127.0.0.1:3001/api/addtodo", {
        //         method: "POST", // *GET, POST, PUT, DELETE, etc.
        //         mode: "no-cors", // no-cors, cors, *same-origin
        //         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //         credentials: "include", // include, *same-origin, omit
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         body: urlencoded
        //     })
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        var urlencoded = new URLSearchParams();
        urlencoded.append("data", e.toString());

        fetch(APIURL + "/api/addtodo", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "include", // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: urlencoded
        }).then((res) => res.json()).then((res1) => {
            setPending((old) => [...old, res1])
        })
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            Create(event.target.value)
        }
        // Create(event.target.value)
        console.log(event.target.value)

    }

    return (
        <>
            {/* pending status */}
            <div class="py-3 text-sm">

                {pending.map((data) => (
                    <>
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">{data.data}</div>
                            <div class="text-sm font-normal text-gray-400 tracking-wide" data-id={data.id} onClick={(e) => Delete(e.target.parentNode.parentNode.getAttribute("data-id"), e.target.parentNode.parentNode.parentNode)}><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                    </>
                ))}
            </div>

            {/* completed status */}
            <div class="py-3 text-sm">
                <div class="flex-grow font-medium text-gray-400 px-2">complete</div>
                <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100-md px-2 py-2 my-2 border-t-2 border-gray-300"></div>

                {completed.map((data) => (
                    <>
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">{data.data}</div>
                            <div class="text-sm font-normal text-gray-400 tracking-wide" data-id={data.id} onClick={(e) => Delete(e.target.parentNode.parentNode.getAttribute("data-id"), e.target.parentNode.parentNode.parentNode)}><FontAwesomeIcon icon={faTimes} /></div>
                        </div>
                    </>
                ))}

                <footer>
                    <div class="flex fixed bottom-14 left-9 right-9 w-4/5 items-center bg-gray-200 rounded-md px-1">
                        <input
                            class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                            id="search" type="text" placeholder="new to-do list" onKeyPress={(e) => handleKeyPress(e)} />
                        <div class="pr-2">
                            <div class="text-sm font-normal text-gray-400 tracking-wide on"><FontAwesomeIcon icon={faPlus} /></div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}