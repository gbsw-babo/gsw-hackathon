import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Todo from "../api-module/todo";
export default function Home() {
    const [completed, setCompleted] = React.useState([])
    const [pending, setPending] = React.useState([])
    return (
        <div class="w-full h-screen max-w-screen-xl flex mx-auto px-2">
            <div class=" justify-center p-4 py-10 flex-1">
                <div class="w-full h-full">
                    <div class="bg-white shadow-md rounded-lg h-full px-3 mb-4">
                        <div class="block text-gray-700 text-lg font-semibold py-2 px-2 border-b-4 border-gray-300">
                            To-do List
                        </div>
                        <Todo />
                        {/* <div class="py-3 text-sm">
                            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                <span class="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                <div class="flex-grow font-medium px-2">1</div>
                                <div class="text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faTimes} /></div>
                            </div>
                        </div>

                        <div class="py-3 text-sm">
                            <div class="flex-grow font-medium text-gray-400 px-2">complete</div>
                            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100-md px-2 py-2 my-2 border-t-2 border-gray-300"></div>
                            <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                <span class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                                <div class="flex-grow font-medium px-2">1</div>
                                <div class="text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faTimes} /></div>
                            </div>

                            <footer>
                                <div class="flex fixed bottom-14 left-9 right-9 w-4/5 items-center bg-gray-200 rounded-md px-1">
                                    <input
                                        class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                        id="search" type="text" placeholder="new to-do list" />
                                    <div class="pr-2">
                                        <div class="text-sm font-normal text-gray-400 tracking-wide on"><FontAwesomeIcon icon={faPlus} /></div>
                                    </div>
                                </div>
                            </footer> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}