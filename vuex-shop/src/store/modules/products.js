
import axios from 'axios';
//use state store json array
const state = {
    products: []
};


//show all products in allproducts collection
const getters = {
    allProducts: state => state.products,
};

//all vx methods and api call here
//state dirct intract to actions
const actions = {
    
    async getProducts({ commit }) {
        const response = await axios.get('http://localhost:3000/product');
        commit('setproduct', response.data)
    },

    async addProducts({ commit }, product) {
        const response = await axios.post('http://localhost:3000/product', product)
        commit('addnewProducts', response.data)
    },

    async removeProducts({ commit },id){
        await axios.delete(`http://localhost:3000/product/${id}`)
        commit('removeProd',id)

    }
};

// actions in intract to mutation 
const mutations = {
    setproduct: (state, products) => (state.products = products),
    addnewProducts: (state, product) => (state.products.push(product)),
    removeProd: (state, id) => (state.products.filter((product)=>{product.id !== id}))
};



export default {
    state,
    getters,
    actions,
    mutations,
}