'use client'


import Cards from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import Style from "./dashboard.module.css"
import { RiRecordCircleLine } from "react-icons/ri"
import { FaSuitcase } from "react-icons/fa"
import { BsBoxSeamFill } from "react-icons/bs"
import { IoIosAdd, IoIosSettings } from "react-icons/io"
import { BiAperture } from "react-icons/bi"
import { ChartNoAxesColumn } from "lucide-react"
import { TiCloudStorage } from "react-icons/ti"
import { TbRouteSquare2 } from "react-icons/tb"
import { useState } from "react"
import PopUp from "../components/PopUp/PopUp"


export default function DashboardPage() {
    const [popup, setPopup] = useState(false)


    return (
        <main className={Style.main}>
            {popup && <PopUp onClose={() => setPopup(false)} />}
            <section className={Style.dashboard}>
                <aside className={Style.aside}>
                    <nav>
                        <section>
                            <BiAperture color="white" size={30} />
                        </section>
                        <section>
                            <RiRecordCircleLine onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                            <FaSuitcase onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                            <BsBoxSeamFill onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                            <ChartNoAxesColumn onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                            <IoIosSettings onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                        </section>
                        <section>
                            <TiCloudStorage onClick={() => setPopup(true)} className={Style.asideIcons} size={25} />
                            <div className={Style.addIcon}>
                                <IoIosAdd onClick={() => setPopup(true)} size={20} />
                            </div>
                        </section>
                    </nav>
                </aside>
                <section className={Style.mainContent}>
                    <Header />
                    <section>
                        <Cards />
                    </section>
                    <footer className={Style.footer}>
                        <div><TbRouteSquare2 color="white" /></div>
                    </footer>
                </section>
            </section>
        </main>
    )
}