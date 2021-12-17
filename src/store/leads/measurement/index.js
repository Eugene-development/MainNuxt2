export const state = () => ({
  ruleMeasurementName: {},
  ruleMeasurementPhone: {},
  ruleMeasurementAddress: {},
  ruleMeasurementTime: {},
  ruleMeasurementComment: {},
  visibleFormMeasurement: false,
  apiMail: {
    baseURL: process.env.API_MAIL
  },
});


export const actions = {
  updateMeasurementName({commit, state}, e) {
    const ruleMeasurementName = {name: e.target.value};
    commit('UPDATE_MEASUREMENT_NAME', ruleMeasurementName)
  },
  updateMeasurementPhone({commit, state}, e) {
    const ruleMeasurementPhone = {phone: e.target.value};
    commit('UPDATE_MEASUREMENT_PHONE', ruleMeasurementPhone)
  },
  updateMeasurementAddress({commit, state}, e) {
    const ruleMeasurementAddress = {address: e.target.value};
    commit('UPDATE_MEASUREMENT_ADDRESS', ruleMeasurementAddress)
  },
  updateMeasurementTime({commit, state}, e) {
    const ruleMeasurementTime = {time: e.target.value};
    commit('UPDATE_MEASUREMENT_TIME', ruleMeasurementTime)
  },
  updateMeasurementComment({commit, state}, e) {
    const ruleMeasurementComment = {comment: e.target.value};
    commit('UPDATE_MEASUREMENT_COMMENT', ruleMeasurementComment)
  },
  changeVisibleFormMeasurement({commit, state}) {
    const visibleFormMeasurement = !state.visibleFormMeasurement;
    commit('VISIBLE_FORM_MEASUREMENT', visibleFormMeasurement)
  },
  async sendMeasurement({state, commit}){
    const data = {
      name: state.ruleMeasurementName.name,
      phone: state.ruleMeasurementPhone.phone,
      address: state.ruleMeasurementAddress.address,
      time: state.ruleMeasurementTime.time,
      comment: state.ruleMeasurementComment.comment
    };

    // const testObj = {gg:888}
    // const spred = {...data, ...testObj}
    // console.log(spred)

    await this.$axios.$post('/sendMeasurement', data, state.apiMail);

    const visibleFormMeasurement = false;
    commit('VISIBLE_FORM_MEASUREMENT', visibleFormMeasurement)
  }
};


export const mutations = {
  UPDATE_MEASUREMENT_NAME: (state, ruleMeasurementName) => state.ruleMeasurementName = ruleMeasurementName,
  UPDATE_MEASUREMENT_PHONE: (state, ruleMeasurementPhone) => state.ruleMeasurementPhone = ruleMeasurementPhone,
  UPDATE_MEASUREMENT_ADDRESS: (state, ruleMeasurementAddress) => state.ruleMeasurementAddress = ruleMeasurementAddress,
  UPDATE_MEASUREMENT_TIME: (state, ruleMeasurementTime) => state.ruleMeasurementTime = ruleMeasurementTime,
  UPDATE_MEASUREMENT_COMMENT: (state, ruleMeasurementComment) => state.ruleMeasurementComment = ruleMeasurementComment,
  VISIBLE_FORM_MEASUREMENT: (state, visibleFormMeasurement) => state.visibleFormMeasurement = visibleFormMeasurement,
};


export const getters = {
  ruleMeasurementName: state => state.ruleMeasurementName,
  ruleMeasurementPhone: state => state.ruleMeasurementPhone,
  ruleMeasurementAddress: state => state.ruleMeasurementAddress,
  ruleMeasurementTime: state => state.ruleMeasurementTime,
  ruleMeasurementComment: state => state.ruleMeasurementComment,
  visibleFormMeasurement: state => state.visibleFormMeasurement,
};
