'use client';

import { useEffect, useState } from "react";
import { db } from "../../../../api/firebaseCRUD";

export default function Page({ params }) {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    const fetchItem = async () => {
        try {
            const fetchedItem = await db.getItem(params.slug);
            setItem(fetchedItem);
        } catch (err) {
            console.error(err);
            setError('Item not found');
        }
    };

    useEffect(() => {
        fetchItem();
    }, [params.slug]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!item) {
        return <div>Loading...</div>;
    }

    function Item({item}){
        return(
            <>
                <div>id: {item.id}</div>
                <div>title: {item.title}</div>
                <div>content: {item.content}</div>
                <div>isAllow: {item.isAllow}</div>


            </>

        )
    }

    return (
        <>
            <Item item={item} />
        </>
    );
}
