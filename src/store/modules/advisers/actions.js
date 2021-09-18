import $ from "jquery";
import axios from "axios"

export default {
    async getAdvisers(context) {
        return new Promise(function (resolve) {
            $.ajax({
                url: 'http://localhost:8080/api/v1/adviser',
                method: 'GET',
            }).done(resp => {
                context.commit('loadAdvisers', resp);
                resolve();
            })
        })
    }
}