export const state = () => ({
  rulePhone: {},
  visibleFormPhone: true,
  apiMail: {
    baseURL: process.env.API_MAIL
  },
});


export const actions = {
  updatePhone({commit, state}, e) {
    const rulePhone = {phone: e.target.value};
    commit('UPDATE_PHONE', rulePhone)
  },

  async sendPhone({state, commit}){
    const data = {phone: state.rulePhone.phone} ;
    await this.$axios.$post('/sendPhone', data, state.apiMail);

    const visibleFormPhone = !state.visibleFormPhone;
    commit('VISIBLE_FORM_PHONE', visibleFormPhone)
  }
};


export const mutations = {
  UPDATE_PHONE: (state, rulePhone) => state.rulePhone = rulePhone,
  VISIBLE_FORM_PHONE: (state, visibleFormPhone) => state.visibleFormPhone = visibleFormPhone,
};


export const getters = {
  rulePhone: state => state.rulePhone,
  visibleFormPhone: state => state.visibleFormPhone
};
