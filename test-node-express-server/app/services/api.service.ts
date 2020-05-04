import axios from 'axios';

export class apiService {

    async postExternalRequest(url, data) {
        axios.post(url, data)
            .then(function (response) { })
            .catch(function (error) { console.error(error.message || error); });
    }
}