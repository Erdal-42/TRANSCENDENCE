function homeAdd() {
    const username = localStorage.getItem('username');
    const profileImage = localStorage.getItem('profileImage');
    return `
            <title> Home </title>
            
            <div class="button-and-background");
            background-size: cover;">
                <div class="background"></div>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                            <div class="page-title  home text-center">
                            </div>
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <div class="hexagon-menu clear">
                                <div class="hexagon-item">
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <a  class="hex-content"onclick="changePage('game')">
                                        <span class="hex-content-inner">
                                            <span class="icon">
                                                <i class="fa fa-bullseye"></i>
                                            </span>
                                            <span class="title" data-translate="game" >GAME</span>
                                        </span>
                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                    </a>
                                </div>
                                <div class="hexagon-item">
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <a  class="hex-content"onclick="changePage('profile')">
                                        <span class="hex-content-inner">
                                            <span class="icon">
                                                <i class="fa fa-bullseye"></i>
                                            </span>
                                            <span class="title" data-translate="profilhome">PROFİLE</span>
                                        </span>
                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                    </a>
                                </div>
                                <div class="hexagon-item">
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div class="hex-item">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <a  class="hex-content"onclick="changePage('exit')">
                                        <span class="hex-content-inner">
                                            <span class="icon">
                                                <i class="fa fa-bullseye"></i>
                                            </span>
                                            <span class="title" data-translate="exit">EXİT</span>
                                        </span>
                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="home-profile">
                <home-profile-text>${username}</home-profile-text>
                <img src="${profileImage}" alt="Profil Resmi" class="home-profile-img">
        </div>
    `;
    
}


function redirectAdd() {
    return `

    <title data-translate="redirecting"></title>
 
    <div class="profil-backgraund">
        <div class="baslik" data-translate="loginSuccess"> </div>
        <br>
        <div class="loader"></div>
         
    </div>
            
    `;

}
