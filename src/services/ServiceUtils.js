export class ServiceUtils {
    //API_URL = "http://lowcost-env.hd2bu28az2.us-west-2.elasticbeanstalk.com/v1/";
    //CLIENT_URL = "http://www.investplay.com.br/";

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