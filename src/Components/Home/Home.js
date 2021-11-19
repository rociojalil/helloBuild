import React from 'react';
import './Home.css';
import NavigationBar from '../commons/NavigationBar';



const Home = () => {

    let ac = localStorage.getItem('account')
    let account = JSON.parse(ac)

    return (
        <>
            <div className='HomeContainer'>
                <div className='HomeContent'>
                    <NavigationBar text='Menu' />
                    <div className='HomeBody'>
                        <h3 className='HomeGreeting'> Hi! </h3>
                        <label className='HomeLabel'> 
                            Everything ok, {account.firstName}? 
                        </label>
                        <label className='HomeLabel'> 
                            Hope you like my little app ❤
                        </label>
                        <label className='HomeLabel'> 
                            Remember. If you sign out, your account
                            will disappear and you will need to re-create it.
                        </label>
                        <div>
                          
                        </div>
                    </div>
                    <div className='Home' />
                </div>
            </div>
        </>
    )
};

export default Home;