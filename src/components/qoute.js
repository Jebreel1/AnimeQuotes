
import React from "react";

function Qouting(props) {
    const {anime, character, quote} = props.anime;
    return (
        // The character & the qoute:
            <div id="ct">
            <div className="corner "id="left_top"></div>
            <div className="corner" id="left_bottom"></div>
            <div className="corner" id="right_top"></div>
            <div className="corner" id="right_bottom"></div>
            <span>{character}</span>
            <blockquote>
                <p><i>&ldquo;{quote}&rdquo; </i></p>
            </blockquote>
            </div>
    );
}

export default Qouting;