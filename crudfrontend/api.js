import useInterCeptor from "./interceptors";


const useApiHelper = () => {
    const axios = useInterCeptor();

    const api = {
        addStudent: (data, params = {}) => axios.post(`api/v1/add-student/`, data, params),
        studentDetails: (id, params = {}) => axios.get(`api/v1/student-details/${id}`, params),
        studentList: (params = {}) => axios.get(`api/v1/student-list/`, params),
        deleteStudent: (id, params = {}) => axios.delete(`api/v1/delete-student/${id}`, params),
        updateStudent: (id, data, params = {}) => axios.put(`api/v1/student-update/${id}/`, data, params)
    }

    return api;
}

export default useApiHelper;