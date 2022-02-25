function Article(props) {
    return (
        <article>
            <input className="star" type="checkbox" onClick={Selected} />
            <a href={"https://reddit.com" + props.article.permalink} target="_blank" rel="noreferrer">
                <h3>{props.article.title}</h3>
                <p>Score: {props.article.score}</p>
            </a>

        </article>
    )

    function Selected() {
        // save to favourites
        let favPosts = localStorage.getItem('favPosts');
        let favID;
        let add = true;
        if (favPosts !== null) {
            favID = favPosts.split(',');
        }
        if (favPosts === null || favPosts === "") {
            localStorage.setItem('favPosts', props.article.id);
        }
        else {
            for (let i = 0; i < favID.length; i++) {
                if (favID[i] === props.article.id) {
                    add = false;
                    break;
                }
            }

            if (add) {
                localStorage.setItem('favPosts', favPosts + "," + props.article.id);
            }
        }
    }
}

export default Article;