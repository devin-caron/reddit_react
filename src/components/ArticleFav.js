function ArticleFav(props) {
    return (
        <article>
            <a href={"https://reddit.com" + props.article.permalink} target="_blank" rel="noreferrer">
                <h3>{props.article.title}</h3>
                <p>Score: {props.article.score}</p>
            </a>
            <input className="removeBtn" type="button" value="remove" onClick={Remove} />
        </article>
    )

    function Remove() {
        // remove favourite
        let favID = localStorage.getItem('favPosts').split(',');
        let id = props.article.id;
        let del = false;
        let favString = "";
        for (let i = 0; i < favID.length; i++) {
            if (favID[i] === id) {
                del = true;
            }
            else if (i === 0 || del) {
                favString = favID[i];
                del = false;
            }
            else {
                favString += "," + favID[i];
            }
        }
        localStorage.setItem('favPosts', favString);
    }
}

export default ArticleFav;