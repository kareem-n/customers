import { FiSend } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from './navbar.module.css';
import { motion } from 'framer-motion';
import { button } from "framer-motion/client";
import { useEffect, useRef } from "react";
import { array } from "yup";



function Navbar() {

    const { navLink } = styles;

    const navLinksRef = useRef();

    const { hash } = useLocation();

    const links = [
        { path: '/', text: 'الصفحه الرئيسية' },
        { path: '#about', text: 'من نحن' },
        { path: '#services', text: 'الخدمات' },
        { path: '#portfolio', text: 'أعمالنا' },
        { path: '#blog', text: 'المدونة' },
        { path: '#faq', text: 'الاسئلة الشائعة' },
    ]



    const handleActiveLink = () => {

        const children = Array.from(navLinksRef.current.children)

        children.map((link) => {

            link.children[0].classList.remove("bg-theme", "text-white")
            if (hash !== '') {
                if (link.children[0].href.includes(hash)) {
                    link.children[0].classList.add("bg-theme", "text-white")
                }

            } else {
                children[0].children[0].classList.add("bg-theme", "text-white")

            }


        })
   




        // links.map(link => {
        //     if (link.path === hash) {
        //         e.target.classList.add("bg-red-500")
        //     }

        // })


    }

    useEffect(() => {

        if (navLinksRef) {
            handleActiveLink();
        }

    }, [navLinksRef, hash])









    return (
        <nav className="px-36 sticky top-0 py-3 bg-gray-200">

            <div className="flex items-center justify-between">
                <div className="">
                    <h2 className="font-bold text-2xl">
                        لوجو
                    </h2>
                </div>

                <div ref={navLinksRef} className="flex items-center gap-x-2">

                    {
                        links.map((link, index) =>
                            <motion.div

                                initial='hidden'
                                whileHover={'visible'}

                                key={index}
                                className={navLink}
                            >
                                <NavLink
                                    className={'flex py-2 px-4'}
                                    to={link.path}
                                // onClick={(e) => {handleActiveLink(e)}}
                                >
                                    {link.text}
                                    <motion.div
                                        variants={{
                                            hidden: { scale: 0, x: 50, y: 50 },
                                            visible: { scale: 1, x: 0, y: 0 },
                                        }}


                                        className="absolute bg-theme inset-0 -z-10">

                                    </motion.div>
                                </NavLink>

                            </motion.div>

                        )
                    }



                </div>



                <div className="">

                    <button className="bg-theme font-bold hover:bg-themeHovered text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-x-3 border border-transparent hover:border-gray-700 transition-all">
                        تواصل معنا
                        <FiSend />
                    </button>

                </div>
            </div>




        </nav>
    )
}

export default Navbar