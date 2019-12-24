import imagePanelApi from "../../api/mock-img-data";

const state = {
  allImage: []
};

const getters = {};

const mutations = {
  setAllImages(state, images) {
    state.allImage = images;
  }
};

const actions = {
  getAllImages({ commit },data) {
    imagePanelApi
      .getImgPanel(data)
      .then(function(response) {
        if (response.data.imgList) {
          commit("setAllImages", response.data.imgList);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
