import React, {useRef} from 'react';
import userAvatar from '../assets/bird.jpg';
export default function Main() {
    const blocksRef = useRef(null);
    const coinsRef = useRef(null);
    const invitesRef = useRef(null);
    const hourRef = useRef(null);
    const dayRef = useRef(null);
    const weekRef = useRef(null);

    function handleInfoClick(event) {
        switch(true) {
            case event.target === blocksRef.current:
                blocksRef.current.classList.add("active");
                coinsRef.current.classList.remove("active");
                invitesRef.current.classList.remove("active");
                break;
            case event.target === coinsRef.current:
                coinsRef.current.classList.add("active");
                blocksRef.current.classList.remove("active");
                invitesRef.current.classList.remove("active");
                break;
            case event.target === invitesRef.current:
                invitesRef.current.classList.add("active");
                blocksRef.current.classList.remove("active");
                coinsRef.current.classList.remove("active");
                break;
        }
    }
    function handleTimeClick(event) {
        switch(true) {
            case event.target === hourRef.current:
                hourRef.current.classList.add("active");
                dayRef.current.classList.remove("active");
                weekRef.current.classList.remove("active");
                break;
            case event.target === dayRef.current:
                dayRef.current.classList.add("active");
                hourRef.current.classList.remove("active");
                weekRef.current.classList.remove("active");
                break;
            case event.target === weekRef.current:
                weekRef.current.classList.add("active");
                dayRef.current.classList.remove("active");
                hourRef.current.classList.remove("active");
                break;
        }
    }
    return(
        <div className="grid">
            <div className="grid__head">
                <div className="grid__head name">Rating</div>
                <button className="grid__head info">i</button>
            </div>
            <div className="grid__leaders">

            </div>
            <div className="grid__info">
                <button className="grid__info blocks"  ref={blocksRef}  onClick={handleInfoClick}>Blocks</button>
                <button className="grid__info coins"   ref={coinsRef}   onClick={handleInfoClick}>Coins</button>
                <button className="grid__info invites" ref={invitesRef} onClick={handleInfoClick}>Invites</button>
            </div>
            <div className="grid__time">
                <button className="grid__time hour" ref={hourRef}  onClick={handleTimeClick}>Hour</button>
                <button className="grid__time day"  ref={dayRef}   onClick={handleTimeClick}>Day</button>
                <button className="grid__time week" ref={weekRef}  onClick={handleTimeClick}>Week</button>
            </div>
            <div className="grid__results"></div>
            <div className="grid__user-result">
                {/**<div className="grid__user-result place">{userPlace}</div>*/}
                <div className="grid__user-result place">100+</div>
                <div className="grid__user-result avatar">
                    <img src={userAvatar} title="User avatar" alt="User avatar"/>
                </div>
                <div className="grid__user-result name">You</div>
                {/**<div className="grid__user-result total">{totalScore}</div>*/}
                <div className="grid__user-result total">58</div>
            </div>
        </div>
    );
};