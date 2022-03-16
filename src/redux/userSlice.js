import { createSlice } from "@reduxjs/toolkit";
/**
 * O slice guarda um conjunto de reducers
 */
export const slice = createSlice({
    name: 'user', //Nome do slice
    initialState: { //Estado inicial
        user: '',
        isLogged: false,
    },
    //Reducers são funções que recebe como parametro o estado da aplicação, e o payload, que no caso, o que vai mudar
    //A função vai mudar de acordo com a action que vai ser utilizada
    reducers: { //Todos os reducers
        changeUser(state, { payload }) { //Action changeUser faz uma coisa
            return { ...state, isLogged: true, user: payload }
        },
        logout(state) { //Action logout faz outra
            return { ...state, isLogged: false, user: '' }
        }
    }
}

)


export const { changeUser, logout } = slice.actions //Exporta as actions

export const selectUser = state => state.user; //Cria um selector

export default slice.reducer; //exporta para usar no store