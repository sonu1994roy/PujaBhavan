/* eslint-disable react/prop-types */
import { ContactInputBox, ContactTextArea } from '../componante/formComponate/input'
function index() {
    return (
        <>
            <section className="relative   h-[80vh] flex flex-col items-center justify-center text-center text-white ">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video className="min-w-full min-h-full absolute object-cover"
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                        type="video/mp4" autoPlay muted loop></video>
                </div>
                <div className="video-content space-y-2 z-10">
                    <div className='container'>
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
                            <div>
                                <h1 className="mb-2 md:text-3xl text-base font-bold text-white"><span className="text-green-500">Hi,</span> I'm Full Stack Developer</h1>
                                <p className="mb-6 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut excepturi magnam enim officiis facilis numquam corporis quos accusantium tempora, dolores quod cum facere architecto soluta atque corrupti a alias perferendis.</p>
                                <div className="flex justify-center space-x-5">
                                    <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-them-primary md:p-5 md:py-3 font-semibold text-white hover:bg-rose-700">
                                        Follow
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-2 w-2  md:h-6 md:w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                    <button className="flex w-full items-center justify-center gap-2 text-dark rounded-2xl bg-gray-900 md:p-5 md:py-3 font-semibold">
                                        Resume
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" h-2 w-2 md:h-6 md:w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="d-block m-auto">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=" md:size-80 size-40 rounded-full " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden pt-4 pb-4 lg:pt-[10px] lg:pb-[10px] bg-white dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* type of category */}
            <section className=" overflow-hidden bg-white py-2 dark:bg-dark lg:py-[10px]">
                <div className='container'>

                    <div className="max-w-screen-2xl mx-auto px-4 py-2 lg:py-24 relative bg-white">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <div className="flex flex-1 flex-col">
                                    <h2 className="mb-1 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                        Gallery
                                    </h2>
                                    <span className="mb-1 block text-base font-semibold text-primary">
                                        Explore the Beauty Within: A Gallery of Captivating Artistry
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="flex flex-1 flex-col gap-2">
                                    <div className='w-full'>
                                        <img className="object-cover h-full w-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                                        <div className='text-start px-4 py-4'>
                                            <h5 className="mb-1 text-[16px] font-bold  text-dark dark:text-white sm:text-[12px] lg:text-[14px] xl:text-[18px]">
                                                Gallery
                                            </h5>
                                            <span className="mb-1 block text-base font-semibold text-primary">
                                                Explore the Beauty Within: A Gallery of Captivating Artistry
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* galery */}
            <section className=" overflow-hidden bg-white py-2 dark:bg-dark lg:py-[10px]">
                <div className='container'>
                    <h2 className="mb-1 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Gallery
                    </h2>
                    <span className="mb-1 block text-base font-semibold text-primary">
                        Explore the Beauty Within: A Gallery of Captivating Artistry
                    </span>
                    <div className="max-w-screen-2xl mx-auto px-4 py-2 lg:py-24 relative bg-white">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-1 flex-col">
                                <div className="flex flex-1 flex-col">
                                    <img className="object-cover h-full" src='https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80' alt='' />
                                </div>
                            </div>
                            <div className="flex flex-1">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <img className="object-cover h-full" src='https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                                    </div>
                                    <div>
                                        <img className="object-cover h-full" src='https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                                    </div>
                                    <div>
                                        <img className="object-cover h-full" src='https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                                    </div>
                                    <div>
                                        <img className="object-cover h-full" src='https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="fixed-bg bg-1 ">
                <div className='container'>
                    <div className="block m-auto w-full md:w-1/2">
                        <div className="flex flex-col h-full relative">

                            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-dark dark:text-white fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
                                    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" /></svg>
                            </div>

                            <div className="h-full relative z-10">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <p className="text-dark dark:text-white serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl" >
                                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                            </p>
                                            <div className="flex my-4 justify-center items-center">
                                                <button className=" bg-them-primary text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2"

                                                >JD</button>
                                                <button  className="bg-them-primary text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-indigo-600 rounded-full mx-2"

                                                >WD</button>
                                                <button
                                                    className="bg-them-primary text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-indigo-600 rounded-full mx-2"

                                                >JW</button>
                                            </div>

                                            {/* <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
                                                <div className="text-center" >
                                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Doe</h2>
                                                    <small className="text-gray-500 text-xs md:text-sm truncate">CEO, ABC Inc.</small>
                                                </div>

                                                <div className="text-center" >
                                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">Winter Doe</h2>
                                                    <small className="text-gray-500 text-xs md:text-sm truncate">CTO, XYZ Corp.</small>
                                                </div>

                                                <div className="text-center" >
                                                    <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">John Wick</h2>
                                                    <small className="text-gray-500 text-xs md:text-sm truncate">Product Manager, Fake Corp.</small>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="swiper-pagination"></div>


                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>


                                    <div className="swiper-scrollbar"></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* contact us */}
            <section className="bg-animated-area overflow-hidden">
                <div className="container py-14">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <span className="mb-4 block text-base font-semibold text-primary">
                                    Contact Us
                                </span>
                                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                                    enim adiqua minim veniam quis nostrud exercitation ullamco
                                </p>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Our Location
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_941_17577)">
                                                <path
                                                    d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_941_17577">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Phone Number
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            (+62)81 414 257 9980
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color dark:text-dark-6">
                                            info@yourdomain.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                                <form>
                                    <ContactInputBox
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                    />
                                    <ContactInputBox
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone"
                                    />
                                    <ContactTextArea
                                        row="6"
                                        placeholder="Your Message"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full rounded border border-primary bg-them-primary p-3 text-white transition hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -right-9 -top-10 z-[-1]">
                                        <svg
                                            width={100}
                                            height={100}
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width={34}
                                            height={134}
                                            viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -bottom-7 -left-7 z-[-1]">
                                        <svg
                                            width={107}
                                            height={134}
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="104.999"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 104.999 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 104.999 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 104.999 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 104.999 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 104.999 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 104.999 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 104.999 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 104.999 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 90.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 75.6654 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 60.9993 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={132}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={88}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={45}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={16}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 46.3333 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy={59}
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 30.6666)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 1.66665)"
                                                fill="#13C296"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 1.66665)"
                                                fill="#13C296"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>

        </>
    )
}

export default index



