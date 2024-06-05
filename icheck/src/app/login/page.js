'use client'
import Link from 'next/link';

import { useState } from "react";
export default function Page(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        console.log("changed email")
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log("changed password")
        setPassword(e.target.value);
    };

    const handleSubmit = () => {

    }


    return(
        <>
            email<input type='text' onChange={handleEmailChange}/><br />
            password<input type='password' onChange={handlePasswordChange}/><br />
            <input type='submit' onClick={handleSubmit}/>

            <Link href={`/register`}>
                  register
            </Link>
        </>
    );
}