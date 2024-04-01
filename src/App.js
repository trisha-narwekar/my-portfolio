import me from './me.png';
import './App.css';
import maddux from './maddux.jpeg';
import mius from './mius.jpeg';
import pixlist from './pixlist.png';
import docuplanner from './docuplanner.png';
import linkedin from './logo-linkedin.svg';
import email from './mail.svg';
import arrowup from './arrow-up-outline.svg';
import logo from './trisha.png';
import './tooltip.css'

function App() {
  return (
    <div>
    <div id="top" class="h-[4rem] shadow-lg grid grid-cols-3"> 
      <a href="#portfolio">
        <button type="button" class="mt-3.5 ml-2 text-orange-500 font-medium rounded-2xl text-sm me-2 mb-2 border-2 border-orange-500 hover:border-blue-400 hover:border-2 focus:outline-none dark:focus:ring-blue-800 h-[2rem] w-[5rem]">Portfolio</button>
      </a>
      <img class="h-[3rem] mt-2 ml-[14rem]" src={logo}/>
      <a href="https://www.linkedin.com/in/trisha-narwekar/">
        <img class="h-[3rem] mt-2 ml-[30rem]" src={linkedin}/>
      </a>
    </div>
    <div class="grid grid-cols-3">
      <div class="pt-36 pb-36 pl-48">
        <div class="change-img h-[36rem] w-[30rem]"/>
      </div>
      <div class="grid grid-rows-2 col-span-2 pt-20">
        <div class="text-orange-600 text-6xl pt-52 pb-0 pr-36 pl-32 font-mono">
          Hi, I'm Trisha, I'm a UI/UX designer, developer, and explorer!
        </div>
        <div class="text-orange-600 text-3xl pt-0 pl-32 font-mono">
        (mostly of food)
        </div>
      </div>
    </div>
    <div id="portfolio" class=" h-[310vh] grid relative">
      <div class="text-right mr-[15rem] text-orange-600 text-3xl font-mono font-bold">Portfolio</div>
      <a href="">
        <img class="h-[35rem] ml-12 hover:shadow-xl" src={maddux}/>
      </a>
      <a href="https://apps.apple.com/us/app/pixlist/id1596189534">
        <img class="h-[35rem] mt-[10rem] ml-[45rem] hover:shadow-xl" src={pixlist}/>
      </a>
      <a href="https://www.figma.com/file/JWRNo7RDjgGWBRjCkcRvhA/DocuPlanner?type=design&node-id=410%3A227&mode=design&t=UPX0cRzOEDgWN8B9-1">
        <img class="h-[35rem] mt-[10rem] ml-[11rem] hover:shadow-xl" src={docuplanner}/>
      </a>
      <a href="https://www.instagram.com/miusgroup/">
        <img class="h-[35rem] mt-[10rem] ml-[30rem] hover:shadow-xl" src={mius}/>
      </a>
    </div>
    <div class="h-[40rem] grid grid-cols-7 items-center justify-items-center relative">
      <div></div>
      <div></div>
      <a href="https://www.linkedin.com/in/trisha-narwekar/">
        <img class="h-[3rem]" src={linkedin}/>
      </a>
      <div class="tooltip">
        <img class="h-[3rem]" src={email}/>
        <span class="tooltiptext">trishaprtn@gmail.com</span>
      </div>
      <a href="#top">
        <img class="h-[3rem]" src={arrowup}/>
      </a>
      <div></div>
      <div></div>
    </div>
    </div>
  );
}

export default App;
