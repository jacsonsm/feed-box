import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

// criando uma função que passa todos os argumentos para  o fetch, que quando resolve retorno para o JSON
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    //o useSWR precisa de uma URL para buscar os dados, que nesse caso utilizará a funçao do fetcher
    const { data, error } = useSWR('/api/get-promo', fetcher)
    //return (<pre>{JSON.stringify(data)}</pre>)
    return (
        <div>
            <PageTitle title='Seja bem vindo !' />
            <p className='mt-6 text-center'>
                A "Empresa" sempre busca atender os seus clientes da melhor forma possivel.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12 '>
                <Link href='./pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>
                        Dar sua opinião ou sugestão
                    </a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='mt-12 text-center font-bold'>
                    {data.message}
                </p>
            }
        </div>
    )
}
export default Index