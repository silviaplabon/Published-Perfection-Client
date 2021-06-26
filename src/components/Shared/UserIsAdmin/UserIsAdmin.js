
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const UserIsAdmin = () => {    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(() => {
        fetch(' https://blooming-stream-33970.herokuapp.com/userIsAdmin?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                    if (data.length > 0) {
                        const user = { ...loggedInUser };
                        user.admin = true;
                        setLoggedInUser(user);
                    }
                }
                else {
                }
            })
    }, [loggedInUser?.email])

    return (
        <></>
    );
};

export default UserIsAdmin;