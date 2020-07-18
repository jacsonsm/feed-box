import React, { useState } from 'react'
//import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import { Validation } from '../utils/validation'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Sugestao: '',
        Nota: 0
    })

    const notas = [1, 2, 3, 4, 5]

    const onChange = event => {
        const value = event.target.value
        const key = event.target.name

        //validaçao individual

        setForm(old => ({
            ...old,
            [key]: value.trim()

        }))
    }

    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const [valid, setValid] = useState({
        status: true,
        menssage: [0]
    })

    const save = async () => {

        //validação dos dados

        const val = Validation(form)
        setValid({
            status: val.status,
            menssage: val.menssage
        })

        if (val.status) {

            try {
                const response = await fetch('/api/save', {
                    method: 'POST',
                    body: JSON.stringify(form)
                })
                const data = await response.json()
                //console.log(data)
                setSuccess(true)
                setRetorno(data)
            } catch (err) {
                console.log('METHOD SAVE ERROR:', err)
            }
        }
    }

    return (
        <React.Fragment>
            <div className='text-black-700 body-font relative'>
                <PageTitle title='Pesquisa' />
                <div className='container px-5 py-4 mx-auto'>
                    {/** Inicio saudaçao empresa*/}
                    <div className='flex flex-col text-center w-full mb-12'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Críticas e sugestões</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <p>Nós da "EMPRESA", buscamos sempre atender os nossos clientes da melhor forma possível.</p>
                                    <p>Por isso, sua opnião é muito importante para nós.</p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** FIm saldaçao empresa */}

                    {/** Inicio validaçao pesquisa */
                        !sucess &&
                        <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                            <div className='flex -m-2'>
                                <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>

                                    {!valid.status &&
                                        <div className='mx-auto text-center mt-6 bg-red-100 p-4 px-6 pb-6 bg-red-200 border-t border-b border-red-500'>
                                            <p className='font-sm font-bold text-red-700 text-left'>Preenchimento inválido!</p>
                                            {
                                                valid.menssage.map(msg => {
                                                    return (
                                                        <p className='font-xs italic text-red-700 text-left'>* {msg}</p>
                                                    )
                                                })}
                                        </div>
                                    }


                                    <label className='font-bold'>Nome:</label>
                                    <input
                                        type='text'
                                        placeholder='Digite o seu nome'
                                        name='Nome'
                                        onChange={onChange}
                                        className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />

                                    <label className='font-bold'>E-mail:</label>
                                    <input
                                        type='text'
                                        placeholder='O seu E-mail'
                                        name='Email'
                                        onChange={onChange}
                                        className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />

                                    <label className='font-bold'>Whatsapp:</label>
                                    <input
                                        type='text'
                                        placeholder='Informe o seu Whatsapp'
                                        name='Whatsapp'
                                        onChange={onChange}
                                        className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />


                                    <label className='font-bold'>Sua crítica ou sugestão:</label>
                                    <input
                                        type='text'
                                        placeholder='Crítica ou sugestão:'
                                        name='Sugestao'
                                        onChange={onChange}
                                        className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />

                                    <div className='mx-auto text-center mt-6'>
                                        <label className='font-bold'>Qual nota você daria para o estabelecimento?</label>
                                    </div>
                                    <div className='w-5/6 mx-auto text-center'>
                                        <div className='flex mx-auto py-6'>
                                            {notas.map(nota => {
                                                return (
                                                    <label className='block w-1/5 text-center font-bold'>
                                                        {nota}<br />
                                                        <input type='radio' name='Nota' value={nota} onChange={onChange} />
                                                    </label>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className='mx-auto text-center mt-2'>
                                        <label className='font-bold'>Você indicaria o nosso estabelecimento para um amigo?</label>
                                    </div>
                                       <div className='mx-auto text-center mt-4'>
                                           <div className='w-5/6 mx-auto text-center'>
                                           <label className='font-bold'>
                                               Sim<input type='radio' name='sim' value='sim' onChange={onChange} /> ...
                                               Não<input type='radio' name='nao' value='nao' onChange={onChange} />
                                            </label>
                                            </div>
                                       </div>
                                            
                                        
                                    

                                    <div className='w-5/6 mx-auto text-center mt-4'>
                                        <button onClick={save}
                                            className='w-full bg-blue-400 hover:shadow font-bold mb-4 py-3 px-6 rounded-lg shadow-lg'>
                                            Enviar...
                                    </button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    /** fim pesquisa */}

                    {/** Inicio retorno apos pesquisa */
                        sucess &&
                        <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                            <div className='flex -m-2'>
                                <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>
                                    <div className='mx-auto mb-2 px-4 py-4 text-center text-blue-700 bg-blue-200 border-t border-b border-blue-500'>
                                        <p className='font-bold'>Obrigado pelo seu feedback!</p>
                                    </div>
                                    <div className='mx-auto mb-2 px-4 py-4 text-center text-gray-700 bg-gray-200 border-t border-b border-gray-500'>
                                        <p className='font-bold'>Cupom:</p>
                                        <p className='text-sm text-2xl mb-4 '>{retorno.Cupom}</p>
                                        <p className='font-bold'>Promoção:</p>
                                        <p className=''>10% pelo seu feedback</p>
                                    </div>
                                    <div className='mx-auto mb-2 px-4 py-4 text-center text-gray-700 bg-gray-200 border-t border-b border-gray-500'>
                                        <p className='italic'>Tire um print desta tela e apresente ao garçom na sua proxima compra!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    /** Fim do retorno apos pesquisa*/}
                </div>
            </div>

        </React.Fragment>
    )
}
export default Pesquisa