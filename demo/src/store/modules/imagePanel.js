import imagePanel  from  '../../api/mock-img-data'


const state = {
    allImage : []
}

const getters = {}

const mutations = {
    setAllImages (state,images) {
        state.allImage = images
    }
}

const actions = {
    getAllImages ({ commit }){
        imagePanel.getAllImages(allImages => {
            commit('setAllImages',allImages)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}