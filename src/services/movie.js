import instance from './base'

export default {
    get: async () => {
        return await instance.get('applicant-test')
    }
}