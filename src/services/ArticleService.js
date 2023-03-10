import axios from "axios";
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
        console.log(response)
        localStorage.setItem("oneArticle",JSON.stringify(article))
        return article
    }).catch((err) => {
        console.log({err: err})
    });
    
}