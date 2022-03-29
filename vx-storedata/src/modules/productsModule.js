

export default {
    namespaced: true,
    state: {
        pmessage:"Product in products",
        products: [
            {
                id: 1,
                name: "iphone 6",
                price: 20
            },
            {
                id: 2,
                name: "iphone 6s",
                price: 50
            },
            {
                id: 3,
                name: "iphone 7s",
                price: 60
            },
            {
                id: 4,
                name: "iphone 8+",
                price: 70
            },
            {
                id: 5,
                name: "iphone XR",
                price: 80
            }
        ]
    },

    getters: {
        getCountofProdust(state) {
            return state.products.length;
        },
        showProducts(state) {
            return state.products
        }
    },

    actions: {
        addNewProduct({commit}) {
            commit('addNewproduct',{
                id: 6,
                name: "iphone XR10",
                price: 100
            })
        }
    },

    mutations: {
        addNewproduct(state,payload){
            state.products.push(payload);
        },
    }
}


