/*
Copyright (C) 2015 Hani Hamrouni. All Rights Reserved.

*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .roundedImageCorners {
      itml-img-treatment: corner-small;
    }
    .customBadgeLayout {
      tv-tint-color: rgb(0, 0, 0);
      margin: 0 0 5 0;
    }
    .slide {
    margin-top: 300px;
     }
    .customRowText {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
    }
    .templateBackground {
          background-color: #091a2a;
    }
    .carouselOverlay {
				padding:180 90 0 1100;
    }
    .carouselOverlayImg {
        tv-position: top-left;
				margin: 0 20 0 0;
    }
    .carouselOverlayTitle {
        tv-position: top;
        tv-align: left;
				margin: 36 0 0;
    }
    .carouselOverlaySubtitle {
        tv-position: top;
        tv-align: left;
    }
    .carouselOverlayText {
        tv-position: footer;
        tv-align: left;
        tv-text-max-lines: 3;
				margin: 0 0 38;
    }
    
    .carouselOverlayImg2 {
        tv-position: bottom-left;
				margin: 0 20 0 0;
    }
    
    .progressOverlay {
				padding: 0;
    }
    .watchedOverlayImg {
        tv-position: bottom-right;
        tv-align: right;
    }
    
    .imgGradient {
        tv-tint-color: linear-gradient(top, 0.37, transparent, 0.5, rgba(61,101,128,0.5), 0.96, rgba(61,101,128,1.0), rgba(61,101,128,1.0));
    }
    .gradientOverlayTitle {
        tv-text-max-lines: 1;
        tv-text-style: body;
				padding: 30;
        text-align: center;
				color: rgba(255, 255, 255, 1.0);
    }
    .gradientOverlaySubtitle {
				color: rgba(255, 255, 255, 0.6);
        tv-text-style: caption2;
        tv-text-max-lines: 1;
				margin: 6 0 -6 0;
        text-align: center;
    }
    
    .simpleCard {
				width: 548;
				height: 250;
        background-color: rgba(255, 255, 255, 0.5);
        tv-highlight-color: rgba(255, 255, 255, 0.9);
        
    }
    .simpleCardTitle {
        tv-position: center;
				color: rgba(0, 0, 0, 0.6);
        tv-text-style: headline;
        tv-text-max-lines: 1;
        text-align: center;
    }
    .simpleCardSubtitle {
        tv-position: center;
				color: rgba(0, 0, 0, 0.4);
        tv-text-style: subtitle3;
        tv-text-max-lines: 1;
        text-align: center;
    }
    </style>
  </head>
  
  <stackTemplate class="templateBackground" theme="dark">
    <collectionList>  
      <carousel>
        <section>
        <lockup Id="NRJ">
            <img src="https://radiomyme.com/tv/resources/images/slide/nrj_slide.png" width="1740" height="400" />
        </lockup>
        <lockup Id="Contact">
            <img src="https://radiomyme.com/tv/resources/images/slide/contact_slide.png" width="1740" height="400" />
        </lockup>
        <lockup Id="FranceINFO">
            <img src="https://radiomyme.com/tv/resources/images/slide/france_info_slide.png" width="1740" height="400" />
        </lockup>
        </section>
      </carousel>
    
      <shelf>
        <header>
          <title>Action</title>
        </header>
        <section>
        <lockup Id="act1">
            <img src="https://abload.de/img/extraction-netflix-4kjwkwz.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">NRJ</title>
        </lockup>
        <lockup Id="act2">
            <img src="https://abload.de/img/71pra814mjl._ac_sy679ykkl2.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Dance Wave</title>
        </lockup>
        <lockup Id="act3">
            <img src="https://abload.de/img/e78bdb11c37f4fbbc37b59lkss.png" width="250" height="350" />
            <title class="showTextOnHighlight">EliumRadio Club and Dance</title>
        </lockup>
        <lockup Id="act4">
            <img src="https://abload.de/img/terminator-darkfatee4kbv.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">HotMix Radio Dance</title>
        </lockup>
        <lockup Id="act5">
            <img src="https://abload.de/img/353a441c-b1a1-44c3-afftkd6.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">MixFeever</title>
        </lockup>
        <lockup Id="act6">
            <img src="https://abload.de/img/12040191-960464833704dfkn3.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Funradio</title>
        </lockup>
        <lockup Id="act7">
            <img src="https://abload.de/img/81jpimw2qal._sl1500_4ojv7.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Parazhit</title>
        </lockup>
        <lockup Id="act8">
            <img src="https://abload.de/img/qikjy.png" width="250" height="350" />
            <title class="showTextOnHighlight">EliumRadio Rock and Pop</title>
        </lockup>
        </section>
      </shelf>
      
      <shelf>
        <header>
          <title>Asia Korea</title>
        </header>
        <section>
        <lockup Id="asia1">
            <img src="https://abload.de/img/thumb_oriqzsd5dxfjmushtk9p.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">RTL</title>
        </lockup>
        <lockup Id="asia2">
            <img src="https://abload.de/img/extreme_job77jw0.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">RTL 2</title>
        </lockup>
        <lockup Id="asia3">
            <img src="https://abload.de/img/syfjlj55.png" width="250" height="350" />
            <title class="showTextOnHighlight">Europe 1</title>
        </lockup>
        <lockup Id="asia4">
          <img src="https://abload.de/img/thumb_ias8iizfau0usei18j2l.jpg" width="250" height="350" />
          <title class="showTextOnHighlight">Contact FM</title>
        </lockup>
        <lockup Id="asia5">
            <img src="https://abload.de/img/thumb_baw9zdb1zjdws4im5kkz.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Nostalgie</title>
        </lockup>
        <lockup Id="asia6">
            <img src="https://abload.de/img/190449865rk2p.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Skyrock</title>
        </lockup>
        <lockup Id="asia7">
            <img src="https://abload.de/img/51-rp7z5ssl._sy445_taj7s.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">RFM</title>
        </lockup>
        <lockup Id="asia8">
            <img src="https://abload.de/img/7b9f169057-ec71-4459-otja6.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Virgin Radio</title>
        </lockup>
        <lockup Id="asia9">
            <img src="https://abload.de/img/eqdtvlcwloj1oqvsdfxaz3gjgr.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">RMC</title>
        </lockup>
        <lockup Id="asia10">
            <img src="https://abload.de/img/29ba7c88c2992020ac3340cjvh.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Cherie FM</title>
        </lockup>
        </section>
    </shelf>
	
    </collectionList>
  </stackTemplate>
</document>`
}
