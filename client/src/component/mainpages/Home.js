import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


const images= ["https://c.ndtvimg.com/2022-02/46b3fbig_ipl-10-teams-logo_625x300_25_February_22.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
             "https://gumlet.assettype.com/barandbench%2F2021-05%2F4097be4e-5be3-44f2-82fa-64ef48221a1e%2FIPL.jpg?auto=format%2Ccompress&fit=max&format=webp&w=768&dpr=1.0",
              "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/01/22/235323-ipl-trophy.png"];



const delay = 2500;


const Home = () => {


  return (
    <div className='home'>
      <h3> Indian Premier League</h3>
      <p>The Indian Premier League <abbr title="The Indian Premier League">(IPL)</abbr> is a professional men's Twenty20 cricket league, contested by ten teams based out of ten Indian cities. The league was founded by the Board of Control 
    for Cricket in India <abbr title=" Board of Control for Cricket in India">(BCCI)</abbr> in 2007. It is usually held between March and May of every year and has an exclusive window in the ICC Future Tours Programme.</p>
        <div>
          <hr/>
      <SimpleImageSlider
      autoPlay={true}
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <hr/>
    </div>
<p>
The IPL is the most-attended cricket league in the world and in 2014 was ranked sixth by average attendance among all sports leagues.[3] In 2010, the IPL became the first sporting event in the world to be broadcast live on YouTube.[4][5] The brand value of the IPL in 2019 was ₹47,500 crore (US$6.2 billion), according to Duff & Phelps.[6] According to BCCI, the 2015 IPL season contributed ₹1,150 crore (US$150 million) to the GDP of the Indian economy.[7] The 2020 IPL season set a massive viewership record with 31.57 million average impressions and with an overall consumption increase of 23 per cent from the 2019 season.

There have been fourteen seasons of the IPL tournament. The current IPL title holders are the Chennai Super Kings, winning the 2021 season.[8] The venue for the 2020 season was moved due to the COVID-19 pandemic and games were played in the United Arab</p><br></br>
<h6>Tournament format</h6>
<p>
Currently, with eight teams, each team plays each other twice in a home-and-away round-robin format in the league phase. At the conclusion of the league stage, the top four teams will qualify for the playoffs. The top two teams from the league phase will play against each other in the first Qualifying match, with the winner going straight to the IPL final and the loser getting another chance to qualify for the IPL final by playing the second Qualifying match. Meanwhile, the third and fourth place teams from league phase play against each other in an eliminator match and the winner from that match will play the loser from the first Qualifying match. The winner of the second Qualifying match will move onto the final to play the winner of the first Qualifying match in the IPL Final match, where the winner will be crowned the Indian Premier League champions.</p>
    </div>
  )
}
export default Home 


  {/* <div className="slideshow">
  <div
    className="slideshowSlider"
    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
  >
    {colors.map((backgroundColor, index) => (
      <div
        className="slide"
        key={index}
        style={{ backgroundColor }}
      ></div>
    ))}
  </div>

  <div className="slideshowDots">
    {colors.map((_, idx) => (
      <div
        key={idx}
        className={`slideshowDot${index === idx ? " active" : ""}`}
        onClick={() => {
          setIndex(idx);
        }}
      ></div>
    ))}
  </div>
  </div> */}