import { useEffect, useState } from "react";
import FormatDate from "./FormatDate";
import WordCount from "./WordCount";
import { 
    TiArrowUpOutline, 
    TiArrowDownOutline, 
    TiArrowForwardOutline 
} from "react-icons/ti";
import { AiOutlineRead } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import FormLogin from "../login/FormLogin";
import "../../assets/css/cardArticle.css";
import StarsUser from "./StarsUser";
import { allArticlesService, likeService } from "../../services/ArticleService";

const CardArticle = () => {
    const [article, setArticle] = useState(JSON.parse(localStorage.getItem("oneArticle"))) 
    const [ newComment, setNewComment ] = useState("");
    const [ showTextArea, setShowTextArea ] = useState(false);
    const [ showBtnAddComment, setShowBtnAddComment ] = useState(true);
    const [ showReadComment, setShowReadComment ] = useState(false)
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const [ ifUserIsLiked, setIfUserIsLiked ] = useState(false)

    useEffect(()=> {
        allArticlesService()
    },[article, newComment, isLoggedIn])

    const cancelComment = () => {
        setShowTextArea(!showTextArea)
        setNewComment("")
    }

    
    console.log(article)
    function AddComment(){
        if (isLoggedIn === "false" || isLoggedIn === null) {
            setShowBtnAddComment(false)
            return <FormLogin 
                        setShowBtnAddComment={setShowBtnAddComment} 
                        isLoggedIn={isLoggedIn}  
                        cancelComment={cancelComment} 
                        setShowTextArea={setShowTextArea}
                    /> 
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

    const ReadComment = () => {
        if (showReadComment === true) {
            return(
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
                                        <StarsUser value ={comment.user.numberComment}/>
                                        <p>Auteur : {comment.user.lastName} {comment.user.firstName}</p>
                                    </div>
                                    <div className="container_p_comment">
                                        <p className="comment-user">{comment.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            )
        }else return null
    }

    const LikeArticle = (value, content) => {
        const article = {
            userId: content.userId,
            like: value
        }
        likeService(article, content._id)
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
                <StarsUser value ={article.user.numberComment}/>
                <div className="article_author">
                    <p>Auteur :</p>
                    <p>{article?.user?.lastName}</p>
                    <p>{article?.user?.firstName}</p>
                </div>
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
                <p>{article?.name}</p>
                <div className="article_info_date">
                    <div className="info_date_data">
                        <p>Date de l'article :</p>
                        <p>{FormatDate(article?.date)}</p>
                    </div>
                    <div className="info_data_read">
                        <p>Temps de lecture :</p>
                        <p>{WordCount(article?.content)}</p>
                    </div>
                    <div className="data_likeNumber">
                        {
                            article.usersLiked.filter(u => u.includes("content.userId")) == null ? 
                                <p className="number_icone">
                                    <button className="btn_liked" onClick={()=> LikeArticle(1, article)}>
                                        <TiArrowUpOutline color="green"/>
                                    </button> {article?.likes}
                                </p> 
                            : 
                                <p className="number_icone">
                                    <button className="btn_liked" onClick={()=> LikeArticle(0, article)}>
                                        <TiArrowUpOutline color="green"/>
                                    </button> {article?.likes}
                                </p>
                            
                        }
                        <p className="number_icone">
                            <button className="btn_liked" onClick={()=> LikeArticle(0,article.user._id)}>
                                <TiArrowDownOutline color="red"/>
                            </button> {article?.dislikes}
                        </p>
                        <p className="number_icone">
                            <button className="btn_liked">
                                <TiArrowForwardOutline color="white"/>
                            </button> {article?.comments?.length}
                        </p>
                    </div>
                </div>
                <section className="article">
                    <p>{article?.content}</p>
                    <span></span>
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
                <div className="container_add_comment">
                    <p className="add_comment">
                        <AiOutlineRead />
                            <button 
                                className="btn_comment" 
                                onClick={()=> setShowReadComment(!showReadComment)}
                            >
                                Lire les commentaires
                            </button>
                        </p> 
                    </div>
                <ReadComment />
            </div>
        </section>
    )
}

export default CardArticle