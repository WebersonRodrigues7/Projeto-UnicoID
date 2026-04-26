'use client'


import { useEffect, useState } from "react"
import Style from "./card.module.css"
interface Customers {
    role: string,
    name: string
    lastName: string
}


export default function Cards() {
    const [customers, setCustomers] = useState<Customers[]>([])
    useEffect(() => {
        async function fetchCustomers() {
            const response = await fetch('/api/customers')
            if(!response.ok) {
                console.error("Erro ao carregar API")
            }

            const data = await response.json()
            setCustomers(data)
        }

        fetchCustomers()

    }, [])
    return (
        <section className={Style.SectionCard}>
            {customers.map((item, i) => (
                <div className={Style.Card} key={i}>
                    <h4 className={item.role === "CLIENT" ? Style.CLIENT : Style.LEAD}>{item.role}</h4>
                    <h1>{item.name}</h1>
                    <h2>{item.lastName}</h2>
                </div>
            ))}

        </section>
    )
}