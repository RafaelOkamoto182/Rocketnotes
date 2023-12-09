import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes() {
    const user = localStorage.getItem("@rocketnotes:user")

    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />

            {/* 
                Tem a fallback route, que serve para uma pessoa nao autenticada tentando entrar em rotas que nao pode.
                A condicional serve pra uma pessoa autenticada que adiciona uma rota nos favoritos: quando ela clica no favoritos, por um 
                    instante o programa ta percorrendo o local storage e fica sem usuario, mandando ele pra home. O getitem la em cima e a 
                    condicional aqui em baixo servem pra evitar que esse redirecionamento indevido aconteça.
            */}
            {!user && <Route path='*' element={<Navigate to="/" />} />}
        </Routes>

    )
}