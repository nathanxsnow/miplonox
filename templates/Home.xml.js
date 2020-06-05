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
            <img src="https://radiomyme.com/tv/resources/images/slide/nrj_slide.png" width="1740" height="500" />
        </lockup>
        <lockup Id="Contact">
            <img src="https://radiomyme.com/tv/resources/images/slide/contact_slide.png" width="1740" height="500" />
        </lockup>
        <lockup Id="FranceINFO">
            <img src="https://radiomyme.com/tv/resources/images/slide/france_info_slide.png" width="1740" height="500" />
        </lockup>
        </section>
      </carousel>
    
      <shelf>
        <header>
          <title>Action</title>
        </header>
        <section>
        <lockup Id="act1">
            <img src="https://radiomyme.com/tv/resources/images/radio/NRJ.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">NRJ</title>
        </lockup>
        <lockup Id="act2">
            <img src="https://radiomyme.com/tv/resources/images/radio/DanceWave.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Dance Wave</title>
        </lockup>
        <lockup Id="act3">
            <img src="https://radiomyme.com/tv/resources/images/radio/eliumradio/1.png" width="308" height="308" />
            <title class="showTextOnHighlight">EliumRadio Club and Dance</title>
        </lockup>
        <lockup Id="act4">
            <img src="https://radiomyme.com/tv/resources/images/radio/hotmix.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">HotMix Radio Dance</title>
        </lockup>
        <lockup Id="act5">
            <img src="https://radiomyme.com/tv/resources/images/radio/mixfeever.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">MixFeever</title>
        </lockup>
        <lockup Id="act6">
            <img src="https://radiomyme.com/tv/resources/images/radio/Funradio.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Funradio</title>
        </lockup>
        <lockup Id="act7">
            <img src="https://radiomyme.com/tv/resources/images/radio/parazhit.png" width="308" height="308" />
            <title class="showTextOnHighlight">Parazhit</title>
        </lockup>
        <lockup Id="act8">
            <img src="https://radiomyme.com/tv/resources/images/radio/eliumradio/2.png" width="308" height="308" />
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
            <img src="https://radiomyme.com/tv/resources/images/radio/RTL.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">RTL</title>
        </lockup>
        <lockup Id="asia2">
            <img src="https://radiomyme.com/tv/resources/images/radio/rtl/RTL2.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">RTL 2</title>
        </lockup>
        <lockup Id="asia3">
            <img src="https://radiomyme.com/tv/resources/images/radio/europe1.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Europe 1</title>
        </lockup>
        <lockup Id="asia4">
          <img src="https://radiomyme.com/tv/resources/images/radio/contact.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Contact FM</title>
        </lockup>
        <lockup Id="asia5">
            <img src="https://radiomyme.com/tv/resources/images/radio/nostalgie.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Nostalgie</title>
        </lockup>
        <lockup Id="asia6">
            <img src="https://radiomyme.com/tv/resources/images/radio/skyrock.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Skyrock</title>
        </lockup>
        <lockup Id="asia7">
            <img src="https://radiomyme.com/tv/resources/images/radio/rfm.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">RFM</title>
        </lockup>
        <lockup Id="asia8">
            <img src="https://radiomyme.com/tv/resources/images/radio/virginradio.png" width="308" height="308" />
            <title class="showTextOnHighlight">Virgin Radio</title>
        </lockup>
        <lockup Id="asia9">
            <img src="https://radiomyme.com/tv/resources/images/radio/rmc.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">RMC</title>
        </lockup>
        <lockup Id="asia10">
            <img src="https://radiomyme.com/tv/resources/images/radio/cheriefm.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Cherie FM</title>
        </lockup>
        </section>
    </shelf>
	
    </collectionList>
  </stackTemplate>
</document>`
}
