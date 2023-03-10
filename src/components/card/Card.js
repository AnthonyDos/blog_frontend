import { useEffect } from "react";
import "../../assets/css/cardHome.css";
import { 
    TiArrowUpOutline, 
    TiArrowDownOutline, 
    TiArrowForwardOutline 
} from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import * as PATH from "../../config/path/pathClient";
import { oneArticlesService } from "../../services/ArticleService";
import WordCount from "./WordCount";
import FormatDate from "./FormatDate";

const Card = (props) => {
    const { dataValue } = props;

    useEffect(()=> {
        
    }, [dataValue])

    return(
        <div className="container_card">
            {
                dataValue?.map((list, index)=> {
                    return(
                        <div className="card" key={index}>
                            <div className="card_userImage">
                                <img 
                                    className="image" 
                                    src={list.user.image} 
                                    crossorigin="anonymous"    
                                    alt="photo de l'utilisateur" 
                                />
                            </div>
                            <h1 className="card_title">{list.name}</h1>
                            <div className="card_date_time">
                                <p>{FormatDate(list.date)}</p>
                                <span>.</span>
                                <p> {WordCount(list.content)} read time</p>
                            </div>
                            <div className="card_image">
                                <Link onClick={()=>oneArticlesService(list._id)} to={PATH.PATH_ARTICLE_ID + list._id}>
                                    <img 
                                        className="image_article"
                                        src={list.image} 
                                        crossorigin="anonymous" 
                                        alt="image de l'article" 
                                    />
                                </Link>
                            </div>
                            <div className="container_icones">
                                <TiArrowUpOutline />
                                <TiArrowDownOutline />
                                <BiCommentDetail />
                                <TiArrowForwardOutline />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;