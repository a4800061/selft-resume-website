
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>StaffTraveler</h1>
               <p>Sep 2017 to Aug 2018</p>
            </div>
            <section className={ styles.content }>
                <p>
                    Airline employees are able to travel with other airlines either for free or a small fee if seats are available. This is known as flying non-revenue. But since airline computer systems all operating individually, it takes a lot of effort to request and keep track of the current availability (loads) for the flights you are interested in.
                </p>
                <p>
                    StaffTraveler provides a way for users to quickly and easily find and share loads information via a communitiy driven platform. Users can spend credits to request loads information, or earn credits by replying to requests for the company they work for.
                </p>
                <p>
                    In addition to loads, users are able to exchange travel tips and book hotels and cars with discounts through the app.
                </p>
                <p>
                    In this project we did a full rewrite of the exising version 1 web application. We built the next version completely from scratch, re-thinking the infrastructure and logic and adopting a modern cloud computing platform.
                </p>
                <p>
                    For version 2 we developed apps for iOS and Android devices as well as an admin web interface.
                </p>
                <p>
                    I was solely responsible for designing and developing the backend infrastructure, APIs, database and the admin web application. This ambitious project took almost a year from start to the first product launch.
                </p>
                <p>
                    The app has close to 100k users at the time of writing and potential to grow much larger. Both revenue and user engagement greatly increased within the first months after launch.
                </p>
            </section>
        </div>
    </div>
}
