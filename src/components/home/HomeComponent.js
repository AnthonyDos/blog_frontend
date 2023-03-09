import Card from "../card/Card";
import "../../assets/css/homeComponent.css";
import { allArticlesService } from "../../services/ArticleService";
import Search from "../search/Search";
import { useState } from "react";

const HomeComponent = () => {
    allArticlesService();
    const [ listArticles, setListArticle ] = useState(JSON.parse(localStorage.getItem("articles")))
    return(
        <div>
            <section className="container-home">
                <Search setData={setListArticle} data={listArticles}/>
                <Card dataValue={listArticles}/>
            </section>
        </div>
    )
}

export default HomeComponent;