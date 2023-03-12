import Card from "../card/Card";
import "../../assets/css/homeComponent.css";
import Search from "../search/Search";

const HomeComponent = (props) => {
    const { listArticles, setListArticle} = props;
    
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