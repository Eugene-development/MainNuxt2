import {mapGetters} from "vuex";

export default {

  computed: {
    ...mapGetters({
      'rulePhone': 'leads/phone/rulePhone',
      'ruleEmail': 'leads/email/ruleEmail',
      'ruleMeasurementName': 'leads/measurement/ruleMeasurementName',
      'ruleMeasurementPhone': 'leads/measurement/ruleMeasurementPhone',
      'ruleMeasurementAddress': 'leads/measurement/ruleMeasurementAddress',
      'ruleMeasurementTime': 'leads/measurement/ruleMeasurementTime',
      'ruleMeasurementComment': 'leads/measurement/ruleMeasurementComment',
      'visibleFormPhone': 'leads/phone/visibleFormPhone',
      'visibleFormMeasurement': 'leads/measurement/visibleFormMeasurement'
    }),
  },
}
