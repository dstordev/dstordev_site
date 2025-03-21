const myYoutubeUrl = "";
const myGithubUrl = "https://github.com/dstordev";
const myTelegramUrl = "https://t.me/at_day";

export const appWindow = () => {
    const userLogoContainer = <div className="userLogoContainer" onClick={async () => {
        /**
         * @param {HTMLElement} linkContainer
         * **/
        const effectLinkContainer = async (linkContainer) => {
            const runBackgroundColor = linkContainer.style.backgroundColor;
            console.log(linkContainer.attributeStyleMap);
            linkContainer.style.borderRadius = "10px";
            linkContainer.style.backgroundColor = "var(--userColorT)";
            await new Promise(r => setTimeout(r, 500));
            linkContainer.style.backgroundColor = runBackgroundColor;
            linkContainer.style.borderRadius = "20px";
        }

        const linkContainers = document.getElementsByClassName("linkContainer");
        if (linkContainers.length > 0) {
            for (let i = 0; i < linkContainers.length; i++) {
                await effectLinkContainer(linkContainers[i]);
            }
        }
    }}>
        <div className="userLogoImg"/>
    </div>

    const createAppWindowSection = (idContainer, classSectionCircle, text, url) => <div className="linkContainer"
                                                                                        id={idContainer}
                                                                                        onClick={() => {
                                                                                            if (url) open(url)
                                                                                        }}>
        <div className="formatedLinkContainer">
            <div className={`${classSectionCircle} circleLinkColumn`}/>
            <b>{text}</b>
            <div className="hideCircleLinkColumn"/>
        </div>
    </div>

    // {createAppWindowSection("youtubeLinkContainer", "youtubeColorBg", "YouTube", myYoutubeUrl)}
    return (<div className="appWindow">
        <div className="appWindowColumn">
            <div className="appWindowHeader">
                {userLogoContainer}
                <div className="userLabelContainer">dstordev</div>
            </div>
            <div className="linksColumn">
                {createAppWindowSection("githubLinkContainer", "githubColorBg", "GitHub", myGithubUrl)}
                {createAppWindowSection("telegramLinkContainer", "telegramColorBg", "Telegram", myTelegramUrl)}
            </div>
            <div className="appWindowLabel">by dstordev</div>
        </div>
    </div>)
}

