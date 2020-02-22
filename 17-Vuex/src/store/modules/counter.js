import * as types from '../types'

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.DOUBLE_COUNTER]: state => state.counter + 'clicks'
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    }
};

const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrement: context => {
        context.commit('decrement');
    },
    asyncIncrement: context => {
        setTimeout(() => context.commit('increment', 1), 1000);
    },
    asyncDecrement: context => {
        setTimeout(() => context.commit('decrement'), 1000);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}