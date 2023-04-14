import React from 'react'
import s from './Contact.module.css'
import {motion} from "framer-motion";
import {MdMyLocation} from 'react-icons/md'
import {IoMdMail} from 'react-icons/io'
import {BsTelegram} from 'react-icons/bs'

const Contact = ({setSelectedPage}) => {
    return (
        <motion.div
            id='contacts'
            className={s.contacts}
            onViewportEnter={() => setSelectedPage('contacts')}
        >
            <div className={s.contactsTitle}>
                <div style={{fontSize: 16, fontWeight: 900, color: '#ff4d30'}}>
                    CONTACTS
                </div>
                <div style={{fontSize: 21, fontWeight: 900}}>
                    Don't be shy! Hit me up! <img style={{width: '1.5rem'}}
                                                                       src='https://em-content.zobj.net/thumbs/160/apple/354/backhand-index-pointing-down_light-skin-tone_1f447-1f3fb_1f3fb.png'
                                                                       alt='location'/>
                </div>
            </div>
            <div className={s.contactsList}>
                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <MdMyLocation />
                    </div>
                    <div className={s.contactsText}>
                        <div className={s.contactTitle}>
                            Location
                        </div>
                        <div className={s.contactText}>
                            Ternopil, Ukraine
                        </div>
                    </div>
                </div>


                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <IoMdMail />
                    </div>
                    <div className={s.contactsText}>
                        <div className={s.contactTitle}>
                            Mail
                        </div>
                        <div className={s.contactText}>
                            romatypylo21@gmail.com
                        </div>
                    </div>
                </div>


                <div className={s.contactItem}>
                    <div className={s.contactIcon}>
                        <BsTelegram />
                    </div>
                    <div className={s.contactsText}>
                        <div className={s.contactTitle}>
                            Telegram
                        </div>
                        <div className={s.contactText}>
                            @Buritoz
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Contact
