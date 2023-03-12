import axios from "axios";
import CardArticle from "../components/card/CardArticle.js";
import AuthHeader from "../config/configAuth/AuthHeader.js";
import * as API_CALL from "../config/path/pathApi";

export const allArticlesService = () => {

    axios.get(API_CALL.BASE_URL + API_CALL.ARTICLES)
    .then((response) => {
        const articles = response.data;
        localStorage.setItem("articles",JSON.stringify(articles))
        return articles
    }).catch((err) => {
        console.log({err: err})
    });
    
}

export const oneArticlesService = (id) => {

    axios.get(API_CALL.BASE_URL + API_CALL.ARTICLES + id)
    .then((response) => {
        const article = response.data;
        localStorage.setItem("oneArticle",JSON.stringify(article))
        return article
    }).catch((err) => {
        console.log({err: err})
    });
    
}

export const likeService = (article, id) => {

    axios.post(API_CALL.BASE_URL + `/article/${id}` + API_CALL.LIKE_ARTICLE,article ,{headers: AuthHeader()} )
    .then((response) => {
        return response
    }).catch((err) => {
        console.log({err: err})
    });
    
}