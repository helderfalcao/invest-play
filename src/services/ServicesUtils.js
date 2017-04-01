export class ServiceUtils {
    API_URL = "http://localhost:8888/v1/";
    CLIENT_URL = "http://localhost:9000/";
    validResponse = function (response) {
        if (response.status == 200) {
            console.log(response)
            return true;
        } else {
            console.log(response);
            return false;
        }
    }
}