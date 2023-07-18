import React from 'react'

const ContactForm = () => {
    return (
        <form className='w-[30rem] border p-3'>
            <div className='flex flex-col my-4'>
                <label htmlFor="name">What's your name?</label>
                <input type="text" className='border-b-[.1rem] border-gray-300 p-2 bg-gray-100 outline-none' />
            </div>
            <div className='flex flex-col my-4'>
                <label htmlFor="name">What's your mobile number? </label>
                <input type="number" className='border-b-[.1rem] border-gray-300 p-2 bg-gray-100 outline-none' />
            </div>
            <div className='flex flex-col my-4'>
                <label htmlFor="">Services</label>
                <div className='flex gap-x-10 my-3'>

                    <div className='flex items-center gap-x-3'>
                        <input type="radio" />
                        <label htmlFor="name">Weddings </label>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <input type="radio" />
                        <label htmlFor="name">Creative </label>
                    </div>
                </div>
            </div>
            <button className='bg-black text-white p-2 px-6 w-full'>Submit</button>
        </form>
    )
}

export default ContactForm