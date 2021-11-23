import { mapActions } from "vuex";
import Getters from "~/mixins/mapping/getters";

export default {
  mixins: [Getters],
  methods: {
    ...mapActions({
      'updatePhone':'leads/phone/updatePhone',
      'updateMeasurementName': 'leads/measurement/updateMeasurementName',
      'updateMeasurementPhone': 'leads/measurement/updateMeasurementPhone',
      'updateMeasurementAddress': 'leads/measurement/updateMeasurementAddress',
      'updateMeasurementTime': 'leads/measurement/updateMeasurementTime',
      'updateMeasurementComment': 'leads/measurement/updateMeasurementComment',
      'sendPhone': 'leads/phone/sendPhone',
      'changeVisibleFormMeasurement': 'leads/measurement/changeVisibleFormMeasurement',
      'sendMeasurement': 'leads/measurement/sendMeasurement'
    })
  },
}
