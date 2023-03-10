import { useEffect, useState } from "react";
import FormatDate from "./FormatDate";
import WordCount from "./WordCount";
import { 
    TiArrowUpOutline, 
    TiArrowDownOutline, 
    TiArrowForwardOutline 
} from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import FormLogin from "../login/FormLogin";
import "../../assets/css/cardArticle.css";

const CardArticle = () => {
    
    const [ newComment, setNewComment ] = useState("");
    const [ showTextArea, setShowTextArea ] = useState(false);
    const [ showBtnAddComment, setShowBtnAddComment ] = useState(true);
    const article = JSON.parse(localStorage.getItem("oneArticle"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const cancelComment = () => {
        setShowTextArea(!showTextArea)
        setNewComment("")
    }

    useEffect(()=> {

    },[article, newComment, isLoggedIn])
    console.log(article)
    function AddComment(){
        if (isLoggedIn === "false") {
            console.log(showBtnAddComment)
            setShowBtnAddComment(false)
            return <FormLogin setShowBtnAddComment={setShowBtnAddComment} showBtnAddComment={showBtnAddComment} isLoggedIn={isLoggedIn} /> 
        }
        setShowBtnAddComment(true)
        return(
            <form className="form_comment">
                <textarea 
                    name="comment" id="" 
                    cols="30" 
                    rows="10" 
                    value={newComment} 
                    onChange={(e)=> setNewComment(e.target.value)}
                ></textarea>
                <div className="container_btn_comment">
                    <button className="btn_comment" onClick={()=>{cancelComment()}}>annuler</button>
                    <button className="btn_comment">publier</button>
                </div>
            </form>
        )
    }

    return(
        <section className="container_content_article">
            <div className="content_article_user">
                <div className="content_article_userInfo">
                    <img
                        className="content_article_userImage" 
                        crossorigin="anonymous"  
                        src={article?.user?.image} 
                        alt="photo de profil" 
                    />
                </div>
                <p>Auteur :</p>
                <p>{article?.user?.lastName}</p>
                <p>{article?.user?.firstName}</p>
            </div>
            <div className="content_article">
                <div className="content_article_image">
                    <img 
                        className="article_image"
                        crossorigin="anonymous"  
                        src={article?.image} 
                        alt="photo de l'article" 
                    />
                </div>
                <p>{article.name}</p>
                <div className="article_info_date">
                    <div className="info_date_data">
                        <p>Date de l'article :</p>
                        <p>{FormatDate(article?.date)}</p>
                    </div>
                    <div className="info_data_read">
                        <p>Temps de lecture :</p>
                        <p>{WordCount(article.content)}</p>
                    </div>
                    <div className="data_likeNumber">
                        <p className="number_icone"><TiArrowUpOutline /> {article.likeCount}</p>
                        <p className="number_icone"><TiArrowDownOutline /> {article.dislikes}</p>
                        <p className="number_icone"><TiArrowForwardOutline /> {article.comments.length}</p>
                    </div>
                </div>
                <section className="article">
                    <p>{article.content}</p>
                </section>
                {
                    showBtnAddComment === true ?
                        <div className="container_add_comment">
                            <p className="add_comment">
                                <BiCommentDetail />
                                <button 
                                    className="btn_comment" 
                                    onClick={()=> setShowTextArea(!showTextArea)}
                                >
                                    Ajouter un commentaire
                                </button>
                            </p> 
                        </div>
                    : null
                }
                {
                    showTextArea === true ? <AddComment /> : null
                }
                <section className="content_commentList">
                    {
                        article?.comments?.map((comment, index) => {
                            return(
                                <div key={index} className="container_comment">
                                    <div className="comment_details">
                                        <div>
                                            <img 
                                                className="comment_user_photo"
                                                crossorigin="anonymous" 
                                                src={comment.user.image} 
                                                alt="photo de profil" 
                                            />
                                        </div>
                                        <p>Auteur : {comment.user.lastName} {comment.user.firstName}</p>
                                    </div>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}

export default CardArticle