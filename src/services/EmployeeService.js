import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL =
    'http://miniproject-env.eba-4m29msi8.ap-southeast-2.elasticbeanstalk.com/api/v1/employees';

class EmployeeService {
    getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();
