import httpApi from '@/utils/httpApi';

export default {
  state: {
    tokenBasicInfo: {},
  },
  getters: {
    tokenBasicsInfo: state => state.tokenBasicInfo,
  },
  mutations: {
    setTokenBasicsInfo(state, tokenBasicsInfo) {
      state.tokenBasicInfo = tokenBasicsInfo;
    },
  },
  actions: {
    async getTokenBasicsInfo({ commit }, { pageNo, pageSize }) {
      const tokenBasicsInfo = await httpApi.getTokenBasicsInfo({ pageNo, pageSize });
      debugger;
      commit('setTokenBasicsInfo', tokenBasicsInfo);
    },
  },
};
