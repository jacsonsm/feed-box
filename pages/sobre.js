import React, {useState} from 'react'
//import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div className='mx-auto text-center mt-6'>
            <PageTitle title='Sobre' />
            <h1>Feed Box é um programa de fidelidade que concede descontos e vantagens .</h1>                             
            <p>Ao realizar a avaliação e deixar a sua opinião ou sugestão sobre o atendimento,</p> 
            <p> Os clientes recebem em troca, cupons de descontos e vantagens.</p>          
            {/*<div>
                <Link href='/'>
                   <a>Home</a>
               </Link>
            </div>*/}
        </div>
    )
}
export default Sobre