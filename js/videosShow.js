const singleVidButtons = document.getElementById("single-vids");
const videoContainer = document.getElementById("single-video");
const contSelection = document.getElementById("cont-selection");
const videoCat = document.getElementById("select-cat");
const catButtons = document.getElementById("cat-button");

let isContentVisible = false;
// var videoCatvalue = videoCat.value;

const form = document.forms["form"];
const optionSelection = form.categorySelection.options;
form.onchange = function (e) {
  e.preventDefault();
  let opt = this.categorySelection.value;

  singleVidButtons.addEventListener("click", () => {
    if (isContentVisible || opt === "english" || opt === "hindi") {
      videoContainer.style.display = "none";
      contSelection.innerHTML = `<div class="content-type" id="content-type">
                    <button class="btns" onclick="popupMsg()" id="uiux">UI/UX Design</button>
                    <button class="btns" id="webdev">Web Development</button>
                    <button class="btns" id="others">Other Languages</button>
                    <button class="btns" id="appscript">App-Script (Google Sheets)</button>
               </div>
               <hr class="lineButton">
               <div class="content-type two" id="main-content-type"></div>`;
      const googleSheets = document.getElementById("appscript");
      googleSheets.addEventListener("click", showGoogleSheetsContent);
      const others = document.getElementById("others");
      others.addEventListener("click", showOtherLanguagesContent);
      others.scrollIntoView();
      const webdev = document.getElementById("webdev");
      webdev.addEventListener("click", showWebDevContent);
      webdev.scrollIntoView();
    } else {
      contSelection.innerHTML = "";
      videoContainer.style.display = "none";
    }
    isContentVisible = !isContentVisible;
  });

  function showWebDevContent() {
    document.getElementById(
      "main-content-type"
    ).innerHTML = `<button class="btns" id="frontend">Front-End Developement</button>
          <button class="btns" id="backend" onclick="popupMsg()">Back-End Development</button>`;
    videoContainer.style.display = "none";
    const frontend = document.getElementById("frontend");
    frontend.addEventListener("click", showFrontendContent);
    frontend.scrollIntoView();
    const videoCat = document.getElementById("video-cat");
    videoCat.scrollIntoView();

    const backend = document.getElementById("backend");
    backend.addEventListener("click", popupMsg);
    backend.scrollIntoView();
  }

  if (opt === "english") {
    catButtons.style.display = "block";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    //   console.log("English");

    function showGoogleSheetsContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat" id="video-cat">
                <div class="category show" id="googleScriptEng">
                    <div class="heading-text">
                        <h2 class="googleLang">Google Sheets</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Appscript Language</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=ZSCwfggOKka14hTo&amp;list=PLv9Pf9aNgemv62NNC5bXLR0CzeaIj5bcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C Language Beginner to Professional by <a class="credits" href="https://www.youtube.com/@excelGoogleSheets" target="_blank">Learn Google Sheets & Excel Spreadsheets</a></h3>
                                <h3><a class="credits" href="https://www.youtube.com/playlist?list=PLv9Pf9aNgemv62NNC5bXLR0CzeaIj5bcw">Full Playlist Check from Here</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }

    function showOtherLanguagesContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat" id="video-cat">
                <div class="category show" id="otherCatEng">
                    <div class="heading-text">
                        <h2 class="otherlang">Other Languages</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/87SH2Cn0s9A?si=4sYgB23x7KsG7oyd&start=6"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C Language Beginner to Professional by <a class="credits" href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C++ Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/-TkoO8Z07hI?si=QWw14hfPLGlO8c0z&start=3"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C++ Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>C# Language</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wxznTygnRfQ?si=HwPBUZKkOrrAO7w9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>C# Beginner to Professional by <a class="credits" href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Data Structure & Algorithms using C</h2>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CBYHwZcbD-s?si=buFFkepiMlai8XU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Data Structure & Algorithms Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Java Language</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/xk4_1vDrzzo?si=FpTwyteKoV3hncrl&start=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Java Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a></h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Python</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/XKHEtdqhLK8?si=8Z_Frdxbg-QPHfPy&start=8"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Python Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@BroCodez" target="_blank">Bro Code</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }

    function showFrontendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
              <h3>These all videos are available only in <span>English Language</span></h3>
            </div>
            <div class="video-cat">
                <div class="category show" id="webDevCatEng">
                    <div class="heading-text">
                        <h2>Front-End Development</h2>
                    </div>
                    <hr>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>HTML, CSS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/bWACo_pvKxg?si=wDl6dZqUlEklEFkh"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>HTML & CSS From Beginner to Professional by <a class="credits" href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>SASS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/sb4Nnc6VtZI?si=-MKaICgoIhTPyxae"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>SASS From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Javascript</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/H3XIJYEPdus?si=NKVliz5cx8T4gGSV"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Javascript From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>React.JS</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/XrwsMN2IWnE?si=Dknxhy3pjGzjOmFA&start=3"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>React.js From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Typescript</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube-nocookie.com/embed/zeCDuo74uzA?si=lsrT19i1DLHsWtXp"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; gyroscope;  encrypted-media; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Typescript From Beginner to Professional by <a class="credits"
                                        href="https://www.youtube.com/@huxnwebdev" target="_blank">HuXn
                                        Webdev</a>
                                </h3>
                            </div>
                        </div>
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Angular.js</h2>
                            </div>
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/9b9pLgaSQuI?si=_b3E9SSiA-ukYkN2"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                            <div class="video-title">
                                <h3>Angular.js For Beginners by <a class="credits"
                                        href="https://www.youtube.com/@MyLesson007" target="_blank">My Lesson</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="video-content-cont">
                        <div class="video-container">
                            <div class="video-category">
                                <h2>Vue.js</h2>
                            </div>
                            <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
  } else if (opt === "hindi") {
    catButtons.style.display = "block";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    console.log("Hindi");

    function showGoogleSheetsContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>English Language</span></h3>
              </div>
              <div class="video-cat" id="video-cat">
                  <div class="category show" id="googleScriptHindi">
                      <div class="heading-text">
                          <h2 class="googleLang">Google Sheets</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                          <div class="video-container googleScript">
                              <div class="video-category">
                                  <h2>Appscript Language</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Video Not Available In Hindi Currently</h2>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              `;
    }

    function showOtherLanguagesContent() {
      document.getElementById("main-content-type").innerHTML = "";
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>Hindi Language</span></h3>
              </div>
              <div class="video-cat">
                  <div class="category show" id="pythonCatHindi">
                      <div class="heading-text">
                          <h2 class="otherlang">Other Languages</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>C Language</h2>
                              </div>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZSPZob_1TOk?si=bCFXjdTHorPNyIJO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                              <div class="video-title">
                                <h3>C language For Beginners by <a class="credits"
                                        href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry</a>
                                </h3>
                            </div>
                          </div>
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>C++ Language</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                          </div>
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>Java Language</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                          </div>
                      </div>
                      <div class="video-content-cont">
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>Python</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>`;
    }

    function showFrontendContent() {
      videoContainer.style.display = "block";
      videoContainer.innerHTML = `<div class="note">
                <h3>These all videos are available only in <span>Hindi Language</span></h3>
              </div>
              <div class="video-cat">
                  <div class="category show" id="webDevCatHindi">
                      <div class="heading-text">
                          <h2>Front-End Development</h2>
                      </div>
                      <hr>
                      <div class="video-content-cont">
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>HTML, CSS</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                             </div>
                            </div>
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>SASS</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                          </div>
                          <div class="video-container">
                              <div class="video-category">
                                  <h2>Javascript</h2>
                              </div>
                              <div class="coming-up-text">
                                <h2>Coming Soon....</h2>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>`;
    }
  } else {
    catButtons.style.display = "none";
    videoContainer.style.display = "none";
    contSelection.innerHTML = "";
    console.log("Select Language");
  }
};
