export const state = () => ({
  ruleEmail: {},
  visibleFormEmail: true,
  apiMail: {
    baseURL: process.env.API_MAIL
  },
});


export const actions = {
  updateEmail({commit, state}, e) {
    const ruleEmail = {email: e.target.value};
    commit('UPDATE_EMAIL', ruleEmail)
  },
  async sendEmail({state, commit}){
    const data = {email: state.ruleEmail.email};
    await this.$axios.$post('/sendEmail', data, state.apiMail);

    const visibleFormEmail = !state.visibleFormEmail;
    commit('VISIBLE_FORM_EMAIL', visibleFormEmail)
  }
};


export const mutations = {
  UPDATE_EMAIL: (state, ruleEmail) => state.ruleEmail = ruleEmail,
  VISIBLE_FORM_EMAIL: (state, visibleFormEmail) => state.visibleFormEmail = visibleFormEmail,
};


export const getters = {
  ruleEmail: state => state.ruleEmail,
  visibleFormEmail: state => state.visibleFormEmail
};
