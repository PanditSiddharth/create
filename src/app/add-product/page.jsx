'use client'
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiCamera } from "react-icons/fi";


const AddProduct = () => {

    const [mstate, setMstate] = useState("")
    const [showCam, setShowCam] = useState("");
    const [isSeller, setIsSeller] = useState("")

    async function client(f) {
        try {

        } catch (error) {
            console.error(error);
        }
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [fileName, setFileName] = useState("Choose a file");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    const aspectRatio = img.width / img.height;
                    if (aspectRatio < 0.7 || aspectRatio > 1.3) {
                        toast.error('Image dimensions should be approximately square shape.');
                        event.target.value = '';
                        setSelectedImage("");
                    } else {
                        setSelectedImage(e.target.result);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDocChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            console.log(file)
            setFileName(file.name)
        }
    };

    const handleStateChange = (e) => {
        setMstate(e.target.value)
        console.log(e.target.value)
    }

    function handleWho(e) {
        if (e.target.value == "seller")
            setIsSeller("yes")
        else setIsSeller("")

        console.log(e.target)
    }

    return (
        <section className='h-[93vh] flex items-center'>
            <div className={`flex my-8 w-full`}>
                <div className={`w-full md:w-[7in] mx-5 md:mx-auto bg-white border rounded-md border-sky-900 space-y-1`}>

                    {/* Form Start */}
                    <form action={client} className={`w-full bg-white rounded-md`}>

                        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0'>

                            <div className="text-white h-28 w-full sm:w-2/3 md:1/2 flex items-center justify-center sm:justify-start rounded-t-md pl-6 mt-4 pr-5 space-x-10">

                                {/* Image upload */}
                                <div
                                    onMouseEnter={() => setShowCam(true)}
                                    onMouseLeave={() => setShowCam(false)}
                                    className="relative w-24 h-24 overflow-hidden flex items-center justify-center "
                                >

                                    <div className="absolute inset-0 flex items-end justify-center">
                                        <div className="w-full h-8 bg-black bg-opacity-30 flex items-end justify-center">
                                            <FiCamera className="text-white mb-2" />
                                        </div>
                                    </div>

                                    <input
                                        id="image-upload"
                                        type="file"
                                        className="absolute self-end z-50 mb-1 text-transparent"
                                        accept="image/*"
                                        name='photo'
                                        onChange={handleImageChange}
                                    />
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                                    ) :
                                        (<div className="w-24 h-24 text-white border-gray-400 border" ></div>)}
                                </div>

                                <div className='flex flex-col justify-center h-full'>
                                    <div className='text-3xl text-gray-600 font-bold'>IGNOU-X</div>
                                    <div className='text-gray-500 text-md'>Add thumbnail</div>
                                </div>
                            </div>

                            <div className='w-full sm:w-1/3 md:1/2 flex justify-center items-center'>

                                <div className="flex items-center justify-center">
                                    <label htmlFor="file-upload" className="px-4 py-2 bg-gray-500 text-white text-sm rounded-md cursor-pointer hover:bg-gray-600 max-w-44 whitespace-nowrap overflow-hidden ">
                                        {fileName}
                                    </label>
                                    <input id="file-upload" type="file"
                                    accept="application/*"
                                    className="sr-only" onChange={handleDocChange} />
                                </div>
                            </div>
                        </div>

                        {/* 1st row */}
                        <div className='flex flex-col md:flex-row justify-between'>

                            <div className={`md:w-1/2 mx-5 my-4`}>
                                <input id="title" type="text" name='title' placeholder="Enter product title"
                                    className="border-b-2 border-gray-500 w-full bg-white py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className={`md:w-1/2 mx-5 my-4`}>
                                <input id="email" type="email" name='email' placeholder="Comma separated tags"
                                    className="border-b-2 border-gray-500 w-full bg-white py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>

                        {/* 5th row address */}
                        {isSeller ? <div className='flex flex-col md:flex-row justify-between'>

                            <div className={`md:w-full mx-5 my-4`}>
                                <input id="address" type="text" name='address' placeholder="Enter product description"
                                    className="border-b-2 border-gray-500 w-full bg-white py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                        </div> : ""}


                        {/* 2nd row */}
                        <div className='flex flex-col md:flex-row justify-between'>

                            <div className={`md:w-1/2 mx-5 my-4`}>
                                <input
                                    id="price"
                                    type="text"
                                    name="price"
                                    placeholder="Enter product price"
                                    autoComplete='true'
                                    className="border-b-2 border-gray-500 w-full bg-white py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className={`md:w-1/2 mx-5 my-4`}>
                                <input
                                    id="cprice"
                                    type="text"
                                    name="price"
                                    placeholder="Max price (optional)"
                                    autoComplete='true'
                                    className="border-b-2 border-gray-500 w-full bg-white py-1 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>

                        {/* 6th row about */}
                        <div className={`mx-5`}>
                            {/* <label htmlFor="about" className='block text-gray-700 text-sm font-bold my-1'>Enter about yourself</label> */}
                            <textarea
                                name="about"
                                placeholder="Enter product description"
                                id=""
                                cols="15"
                                rows="2"
                                className={`border-b-2 border-gray-500 w-full bg-white py-1 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                            />
                        </div>

                        {/* 7th row */}
                        <div className='flex flex-row w-full justify-center items-center text-gray-700 pb-2 pt-4'>
                            <button className='bg-sky-900 text-sm py-[6px] text-white hover:bg-sky-950 px-[20px] rounded-md'
                                type='submit'
                            >Add product</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default AddProduct