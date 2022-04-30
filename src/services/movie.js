import instance from './base'

export default {
    get: async () => {
        try {
            return (await instance.get('applicant-test/')).data
        } catch (e) {
            return {}
        }
    }
}