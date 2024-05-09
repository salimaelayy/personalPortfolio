"use client"
import React, { useState } from 'react';

const CForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission here, like sending data to a server or performing client-side validation
        console.log(formData);
    };

    return (
        <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 text-left">
                <label htmlFor="name" className="block">
                    <span className="text-background">Name</span>
                    <input type="text" id="name" name="name" placeholder="john doe" value={formData.name} onChange={handleChange} className="mt-1 p-2 border-accent border-2 bg-transparent   text-background w-full rounded-md" required />
                </label>
                <label htmlFor="email" className="block">
                    <span className=" text-background ">Email Address</span>
                    <input type="email" id="email" name="email" placeholder="johndoe@email.com" value={formData.email} onChange={handleChange} className="mt-1 p-2 border-accent border-2 bg-transparent  text-background  w-full rounded-md" required />
                </label>
                <label htmlFor="message" className="block">
                    <span className=" text-background">Message</span>
                    <textarea id="message" name="message" placeholder="How may i help you" value={formData.message} onChange={handleChange} className="mt-1 p-2 border-accent border-2 bg-transparent  text-background w-full rounded-md" rows={4} required />
                </label>
            </div>
            <div className="mt-6">
                <button type="submit" className="rounded-md focus:outline-none py-2 px-6 hover:bg-rose-500 bg-accent text-background">Submit</button>
            </div>
        </form>
    );
};

export default CForm;
