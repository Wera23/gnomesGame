import { apiService } from "./api.service";

class GnomesService {
    getGnomes(limit, offset) {
        return apiService.get(`http://master.datasource.jazzy-hr.jzapp.io/api/v1/gnomes?limit=${limit}&offset=${offset}`)
            .catch(error => Promise.reject(error));
    }
}

export const gnomesService = new GnomesService();