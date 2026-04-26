'use client'

import { IoIosArrowDown } from "react-icons/io"
import Style from "./header.module.css"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import { ListFilter } from "lucide-react"
import { CgSidebarOpen } from "react-icons/cg"
import { FiCircle } from "react-icons/fi"
import { useState } from "react"

export default function Header() {
    const [aberto, setAberto] = useState(false)

    return (
        <header className={Style.header}>
            <section className={Style.nav}>
                <h1>
                    Customers
                </h1>
                <div className={Style.menuHamburguer}>
                    <button className={Style.hamburguer} onClick={() => setAberto(!aberto)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={`${Style.actions} ${aberto ? Style.open : ''}`}>
                    <span className={Style.filter}><ListFilter size={20} /></span>
                    <span className={Style.icons}><FaMapMarkerAlt size={20} /></span>
                    <span className={Style.icons}><CgSidebarOpen size={20} /></span>
                    <span className={Style.icons}><FiCircle size={20} /></span>
                    <span className={Style.search}><FaSearch size={20} /></span>
                </div>
            </section>

            <section className={Style.infos}>
                <p className={Style.allTypes}>All types Icone <span>
                    <IoIosArrowDown />
                </span></p>
                <p className={Style.many}>11 <span>of</span> 2,937 <span>contacts</span></p>
            </section>
        </header>
    )
}