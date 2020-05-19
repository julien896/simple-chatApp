import React,{ useState, useEffect } from 'react';
import { db } from './Firebase'

const useChat = () => {

    const[error,setError]= useState(null);
    const[loading,setLoading]= useState(true);
    const[messages,setMessages]= useState([]);

    useEffect(
        () => {
            const onsuscribe = db.collection('messages').onSnapshot(
               snapshot => {
                    setLoading(false);
                    setMessages(snapshot.docs.map (d => ({id: d.id, ...d.data()})));
                },
                err => {
                    setError(err);
                }
            );
            return () => onsuscribe()
        },
        
    [setMessages]
    )

    return {error,loading,messages};
}
 
export default useChat;