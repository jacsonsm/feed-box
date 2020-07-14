import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre..</h1>
            <p>Uma caixa de sugestões na qual os
                clientes podem deixar opiniões e sugestões sobre os
                estabelecimentos comerciais e, em troca, receber cupons de
                desconto e vantagens.
            </p>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}
export default Sobre