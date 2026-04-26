'use client'

import { GiCircleClaws } from "react-icons/gi"
import Cards from "../components/Cards/Cards"
import Header from "../components/Header/Header"
import Style from "./dashboard.module.css"
import { RiRecordCircleLine } from "react-icons/ri"
import { FaSuitcase } from "react-icons/fa"
import { BsBoxSeamFill } from "react-icons/bs"
import { IoIosAdd, IoIosSettings } from "react-icons/io"
import { BiAperture } from "react-icons/bi"
import { ChartNoAxesColumn, ChartNoAxesColumnIncreasing } from "lucide-react"
import { TiCloudStorage } from "react-icons/ti"
import { TbRouteSquare2 } from "react-icons/tb"

export default function DashboardPage() {


    return (
        <main className={Style.main}> 
            <section className={Style.dashboard}>
                <aside className={Style.aside}>
                    <nav>
                        <section>
                            <BiAperture color="white" size={30}/>
                        </section>
                        <section>
                            <RiRecordCircleLine className={Style.asideIcons}  size={25} />
                            <FaSuitcase className={Style.asideIcons}  size={25} />
                            <BsBoxSeamFill className={Style.asideIcons}  size={25}  />
                            <ChartNoAxesColumn className={Style.asideIcons}  size={25}  />
                            <IoIosSettings className={Style.asideIcons}  size={25}  />
                        </section>
                        <section>
                            <TiCloudStorage className={Style.asideIcons} size={25}/>
                            <div className={Style.addIcon}>
                                <IoIosAdd size={20} />
                            </div>
                        </section>
                    </nav>
                </aside>
                <section className={Style.sect}>
                    <Header />
                    <section>
                        <Cards />
                    </section>
                    <footer className={Style.footer}>
                        <div><TbRouteSquare2 color="white"/></div>
                    </footer>
                </section>
            </section>
        </main>
    )
}