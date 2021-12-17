import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      'rulePhone': 'leads/phone/rulePhone',
      'visibleFormPhone': 'leads/phone/visibleFormPhone',

      'ruleMeasurementName': 'leads/measurement/ruleMeasurementName',
      'ruleMeasurementPhone': 'leads/measurement/ruleMeasurementPhone',
      'ruleMeasurementAddress': 'leads/measurement/ruleMeasurementAddress',
      'ruleMeasurementTime': 'leads/measurement/ruleMeasurementTime',
      'ruleMeasurementComment': 'leads/measurement/ruleMeasurementComment',
      'visibleFormMeasurement': 'leads/measurement/visibleFormMeasurement',

      'ruleEmail': 'leads/email/ruleEmail',
      'visibleFormEmail': 'leads/email/visibleFormEmail'
    }),
  },
}
