import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudShowersHeavy, faSnowflake, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Weather from "../api-module/weather"
export default function Home() {
    return (
        <div class="w-full h-screen max-w-screen-xl mx-auto flex px-2">
            <div class=" justify-center p-4 py-10 flex-1">
                <div class="w-full h-full">
                    <div class="bg-white shadow-md rounded-lg h-full px-3 mb-4">

                        <div class="py-3 text-sm border-b-2 border-gray-300">
                            <div class="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-2 py-2 my-2">
                                <Weather />
                                {/* <div class="flex-grow text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faCloud} size="6x" /></div>
                                <div class="flex-grow font-medium py-4 px-4 text-5xl">18°</div>
                                <div class="flex-grow font-medium py-4 px-2 text-5xl">
                                    <div class="font-normal text-sm pl-2">
                                        맑음
                                    </div>
                                    <div class="font-normal text-sm pl-2">
                                        18°/14°
                                    </div>
                                </div> */}
                            </div>
                            <div class="flex justify-start items-end cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-2 py-2 mx-auto my-2">
                                <div class="flex-none text-sm font-normal text-gray-400 pr-2 tracking-wide"><FontAwesomeIcon icon={faLocationArrow} /></div>
                                <div class="text-sm font-normal text-gray-400 tracking-wide w-auto">경상북도 의성군</div>
                            </div>
                        </div>
                        <div class="py-3 text-sm border-b-2 cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 border-gray-300">
                            <div class="flex justify-between items-center place-items-end place-content-end px-2 pt-2 my-2">
                                <div class="flex-grow text-sm font-normal text-gray-400 tracking-wide">오늘의 확진자는 </div>
                                <div class="flex-none font-medium tracking-wide text-2xl">0</div>
                                <div class="font-medium text-gray-400 tracking-wide w-auto px-2">명</div>
                            </div>
                            <div class="flex justify-between items-center place-items-end place-content-end  px-2 pb-2 my-2">
                                <div class="flex-grow text-sm font-normal text-gray-400 tracking-wide">오늘의 거리두기 단계는 </div>
                                <div class="flex-none font-medium tracking-wide text-2xl">0</div>
                                <div class="font-medium text-gray-400 tracking-wide w-auto px-2">단계</div>
                            </div>
                        </div>
                        <div class="py-3 text-sm border-b-2 border-gray-300">
                            <div class="flex justify-start text-gray-700px-2 px-2 py-2 my-2">
                                <div class="flex-grow text-sm font-normal text-gray-400 tracking-wide">오늘의 취미</div>
                                <div class="flex-grow px-2 font-semibold text-4xl">뜨개질</div>

                            </div>
                            <div class="flex justify-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-2 py-2 mx-auto my-2 border-b-2 border-gray-300 w-5/6">

                                <div class="flex-none text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faYoutube} /></div>
                                <div class="flex-grow font-medium text-gray-400 px-2">관련 영상 더보기</div>
                            </div>
                            <div onClick={() => location.href = 'https://www.google.com/search?q=%EB%9C%A8%EA%B0%9C%EC%A7%88&oq=%EB%9C%A8%EA%B0%9C%EC%A7%88&aqs=chrome..69i57l2.2641j0j7&sourceid=chrome&ie=UTF-8'} class="flex justify-self-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-2 py-2 mx-auto my-2 border-b-2 border-gray-300 w-5/6">
                                <div class="flex-none text-sm font-normal text-gray-400 tracking-wide"><FontAwesomeIcon icon={faGoogle} /></div>
                                <div class="flex-grow font-medium text-gray-400 px-2">관련 정보 더보기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}