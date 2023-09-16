import React, { useState, useEffect } from "react";

const FilmCard = () => {
  useEffect(() => {
    fetch("https://api.example.com/movies") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        // Process the data and update state or variables as needed
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="relative bg-white w-full h-[61.38rem] overflow-y-auto text-left text-[0.88rem] text-gainsboro-100 font-poppins">
      
      {/* <div className="absolute top-[55.38rem] left-[17.19rem] w-[49.07rem] h-[48.25rem] text-[0.94rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[49.06rem] h-[3.44rem] text-[1.25rem] text-white">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-gray-200 box-border w-[49.06rem] h-[3.44rem] border-[1px] border-solid border-silver" />
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-crimson-100 w-[15.81rem] h-[3.44rem]" />
          <div className="absolute top-[0.81rem] left-[1.25rem] font-medium">
            Top rated movie #65
          </div>
          <div className="absolute top-[0.81rem] left-[17.31rem] font-medium text-darkslategray-200">
            Awards 9 nominations
          </div>
          <img
            className="absolute top-[0.81rem] left-[45.56rem] w-[1.88rem] h-[1.88rem] object-cover"
            alt=""
            src="/Poster.png"
          />
        </div>
        <img
          className="absolute top-[82.38rem] left-[62.75rem] w-[1.88rem] h-[1.88rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <img
          className="absolute top-[85.19rem] left-[17.19rem] w-[49.07rem] h-[0rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[27rem] left-[0.38rem] text-[1.25rem]">{`All cast & crew`}</div>
        <img
          className="absolute top-[5.69rem] left-[7.38rem] w-[2.38rem] h-[0.31rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[5.69rem] left-[0rem] text-[1.5rem] font-medium">
          Top Cast
        </div>
        <div className="absolute top-[9.88rem] left-[0rem] w-[8.81rem] h-[14rem] text-center text-gainsboro-300">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-lightcyan w-[8.75rem] h-[8.75rem]" />
          <img
            className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute top-[9.69rem] left-[0rem] font-medium">
            <p className="m-0 text-gainsboro-100">Tom Cruise</p>
            <p className="m-0">Capt. Pete Mitchell</p>
            <p className="m-0">(Maverick)</p>
          </div>
        </div>
        <div className="absolute top-[9.88rem] left-[12.94rem] w-[8.75rem] h-[12.56rem] text-center">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-ghostwhite w-[8.75rem] h-[8.75rem]" />
          <img
            className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute top-[9.69rem] left-[0.13rem] font-medium">
            <p className="m-0">Jennifer Connelly</p>
            <p className="m-0 text-gainsboro-300">Penny Benjamin</p>
          </div>
        </div>
        <div className="absolute top-[9.88rem] left-[25.38rem] w-[9.81rem] h-[14rem] text-center text-gainsboro-300">
          <div className="absolute top-[0rem] left-[0.5rem] rounded-[50%] bg-aliceblue w-[8.75rem] h-[8.75rem]" />
          <img
            className="absolute top-[0rem] left-[0.5rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute top-[9.69rem] left-[0rem] font-medium">
            <p className="m-0 text-gainsboro-100">Miles Teller</p>
            <p className="m-0">Lt. Bradley Bradshaw</p>
            <p className="m-0">(Rooster)</p>
          </div>
        </div>
        <div className="absolute top-[9.88rem] left-[38.38rem] w-[9.56rem] h-[14rem] text-center text-gainsboro-300">
          <div className="absolute top-[0rem] left-[0.44rem] rounded-[50%] bg-darkgray w-[8.75rem] h-[8.75rem]" />
          <img
            className="absolute top-[0rem] left-[0.44rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute top-[9.69rem] left-[0rem] font-medium">
            <p className="m-0 text-gainsboro-100">Val Kilmer</p>
            <p className="m-0">Adm. Tom Kazansky</p>
            <p className="m-0">(Iceman)</p>
          </div>
        </div>
        <img
          className="absolute top-[81.38rem] left-[17.19rem] w-[49.06rem] h-[0rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[30.81rem] left-[0.38rem] text-[1.25rem] font-medium">
          <p className="m-0">'Top Gun' Trivia, Facts, and</p>
          <p className="m-0">Figures</p>
        </div>
        <img
          className="absolute top-[86.19rem] left-[38rem] rounded-3xs w-[28.25rem] h-[17.13rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[35.5rem] left-[0.38rem] text-[1.13rem]">
          <p className="m-0">How expensive was Top Gun to</p>
          <p className="m-0">make? In this episode of "By the</p>
          <p className="m-0">Numbers," we break down all the</p>
          <p className="m-0">statistics you need to know</p>
          <p className="m-0">(and some you don't) of the</p>
          <p className="m-0">original '80s classic 'Top Gun.'</p>
        </div>
        <div className="absolute top-[46.56rem] left-[0.38rem] text-[1.13rem] text-mediumturquoise">
          Learn more
        </div>
      </div>
      <div className="absolute top-[106rem] left-[17.56rem] w-[48.69rem] h-[23.69rem] text-[0.75rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[48.72rem] h-[21rem]">
          <div className="absolute top-[0rem] left-[0rem] text-[1.56rem] font-semibold">
            Similar Movies
          </div>
          <div className="absolute top-[0.13rem] left-[45.56rem] text-[0.94rem] font-semibold text-dimgray">
            See all
          </div>
          <img
            className="absolute top-[4.06rem] left-[0rem] rounded-xl w-[10.75rem] h-[16.94rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <img
            className="absolute top-[4.06rem] left-[12.69rem] rounded-xl w-[10.69rem] h-[16.94rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <img
            className="absolute top-[4.06rem] left-[25.75rem] rounded-xl w-[10.81rem] h-[16.94rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <img
            className="absolute top-[4.06rem] left-[37.94rem] rounded-xl w-[10.75rem] h-[16.94rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute top-[4.06rem] left-[7.13rem] w-[3.65rem] h-[1.51rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray-300 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />
            <img
              className="absolute top-[0.25rem] left-[0.63rem] w-[0.94rem] h-[0.94rem] object-cover"
              alt=""
              src="/Poster.png"
            />
            <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
              6.9
            </div>
          </div>
          <div className="absolute top-[4.06rem] left-[19.75rem] w-[3.65rem] h-[1.51rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />
            <img
              className="absolute top-[0.25rem] left-[0.63rem] w-[0.94rem] h-[0.94rem] object-cover"
              alt=""
              src="/Poster.png"
           />
            <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
              7.9
            </div>
          </div>
          <div className="absolute top-[4.06rem] left-[32.94rem] w-[3.65rem] h-[1.51rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />
            <img
              className="absolute top-[0.25rem] left-[0.63rem] w-[0.94rem] h-[0.94rem] object-cover"
              alt=""
              src="/Poster.png"
           />
            <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
              8.3
            </div>
          </div>
          <div className="absolute top-[4.06rem] left-[45.06rem] w-[3.65rem] h-[1.51rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />
            <img
              className="absolute top-[0.25rem] left-[0.63rem] w-[0.94rem] h-[0.94rem] object-cover"
              alt=""
              src="/Poster.png"
           />
            <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
              7.0
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[103.5rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
          alt=""
          src="/Poster.png"
       />
        <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
        <img
          className="absolute top-[12.38rem] left-[1rem] w-[1.44rem] h-[1.44rem] object-cover"
          alt=""
          src="/Poster.png"
       />
        <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">{`New & Upcoming Sequels, Prequels`}</div>
      </div>
      <div className="absolute top-[87.13rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
          alt=""
          src="/Poster.png"
       />
        <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
        <img
          className="absolute top-[12.38rem] left-[1rem] w-[1.44rem] h-[1.44rem] object-cover"
          alt=""
          src="/Poster.png"
        />
      <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
          Top 50 TV Dramas
        </div>
      </div>
      <div className="absolute top-[78.81rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
        <div className="absolute top-[0.88rem] left-[0.94rem]">
          <p className="m-0">Upcoming Action and</p>
          <p className="m-0">Adventure Movies and TV</p>
        </div>
        <img
          className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
          updated 3 months ago • 26 images
        </div>
      </div>
      <div className="absolute top-[119.88rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
        <div className="absolute top-[0.88rem] left-[0.94rem]">Favourite</div>
        <img
          className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
          created 2 months ago • 48 images
        </div>
      </div>
      <div className="absolute top-[70.5rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
        <div className="absolute top-[0.88rem] left-[0.94rem]">
          2022 Summer Movie Guide
        </div>
        <img
          className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
          updated 1 month ago • 52 images
        </div>
      </div>
      <div className="absolute top-[62.19rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
        <div className="absolute top-[0.88rem] left-[0.94rem]">
          <p className="m-0">The Billion-Dollar Film Club: 50</p>
          <p className="m-0">Movies to Reach $1 Billion Worldwide</p>
        </div>
        <img
          className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
          updated 1 week ago • 50 images
        </div>
      </div>
      <div className="absolute top-[45.81rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
        <img
          className="absolute top-[12.31rem] left-[0.88rem] w-[1.69rem] h-[1.69rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
          The Best Movies and Shows in September
        </div>
      </div> */}
      {/* <div className="absolute h-full w-[14.95%] top-[0%] right-[85.05%] bottom-[0%] left-[0%] text-[1.25rem] text-dimgray">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-26xl rounded-br-26xl rounded-bl-none bg-white box-border border-[1px] border-solid border-gray-600" />
        <div className="absolute h-[5.09%] w-[82.3%] top-[5.3%] right-[8.85%] bottom-[89.61%] left-[8.85%] flex flex-row items-center justify-start gap-[1.5rem] text-[1.5rem] text-darkslategray-200 font-dm-sans">
          <img
            className="relative w-[3.13rem] h-[3.13rem] object-cover"
            alt=""
            src="/Poster.png"
          />
          <b className="relative leading-[1.5rem]">MovieBox</b>
        </div>
        <div className="absolute h-[3.05%] w-[44.69%] top-[21.08%] right-[36.73%] bottom-[75.87%] left-[18.58%]">
          <div className="absolute h-full w-[60.4%] top-[0%] left-[39.6%] font-semibold inline-block">
            Home
          </div>
          <img
            className="absolute top-[0.06rem] left-[-0.12rem] w-[1.81rem] h-[1.81rem] object-cover"
            alt=""
            src="/Poster.png"
          />
        </div>
        <div className="absolute h-[8.76%] w-full top-[28.92%] right-[0%] bottom-[62.32%] left-[0%] text-crimson-100">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-200" />
          <img
            className="absolute h-[109.34%] w-[6.41%] top-[-2.35%] right-[-1.99%] bottom-[-7%] left-[95.58%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/Poster.png"
          />
          <div className="absolute h-[34.88%] w-[31.86%] top-[32.56%] left-[36.28%] font-semibold inline-block">
            Movies
          </div>
          <img
            className="absolute top-[1.75rem] left-[2.63rem] w-[1.56rem] h-[1.56rem] object-cover"
            alt=""
            src="/Poster.png"
          />
        </div>
        <div className="absolute h-[3.05%] w-[40.71%] top-[42.36%] left-[36.28%] font-semibold inline-block">
          TV Series
        </div>
        <div className="absolute h-[3.05%] w-[46.9%] top-[53.05%] left-[36.28%] font-semibold inline-block">
          Upcoming
        </div>
        <img
          className="absolute top-[26.06rem] left-[2.5rem] w-[1.81rem] h-[1.81rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <img
          className="absolute top-[32.63rem] left-[2.5rem] w-[1.81rem] h-[1.81rem] object-cover"
          alt=""
          src="/Poster.png"
        />
        <div className="absolute h-[3.05%] w-[50.44%] top-[89.92%] right-[30.97%] bottom-[7.03%] left-[18.58%]">
          <div className="absolute h-full w-[64.91%] top-[0%] left-[35.09%] font-semibold inline-block">
            Log out
          </div>
          <img
            className="absolute top-[-0.06rem] left-[-0.12rem] w-[2.13rem] h-[2.13rem] object-cover"
            alt=""
            src="/Poster.png"
          />
        </div>
        <div className="absolute top-[38.19rem] left-[1.75rem] w-[10.63rem] h-[14.25rem] text-[0.75rem]">
          <div className="absolute top-[1.09rem] left-[-0.03rem] rounded-xl bg-lavenderblush-200 box-border w-[10.69rem] h-[13.19rem] border-[1px] border-solid border-crimson-300" />
          <div className="absolute top-[8.63rem] left-[0.94rem] font-medium">
            <p className="m-0">50k people are playing</p>
            <p className="m-0">now</p>
          </div>
          <div className="absolute top-[3.75rem] left-[1rem] text-[0.94rem] font-semibold text-darkslategray-300">
            <p className="m-0">Play movie quizes</p>
            <p className="m-0">and earn</p>
            <p className="m-0">free tickets</p>
          </div>
          <div className="absolute top-[11.38rem] left-[1.81rem] rounded-[30px] bg-crimson-400 w-[7rem] h-[1.88rem]" />
          <div className="absolute top-[11.75rem] left-[2.88rem] font-medium text-crimson-100">
            Start playing
          </div>
          <div className="absolute top-[0rem] left-[4.19rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.25)] w-[2.19rem] h-[2.19rem]" />
        </div>
      </div> */}
    </div>
  );
};

export default FilmCard;
