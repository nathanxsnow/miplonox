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
          background-color: #151515;
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
		<lockup Id="act1">
            <img src="https://abload.de/img/sawnndrj98.jpg" width="1740" height="500" />
        </lockup>
        <lockup Id="act2">
            <img src="https://abload.de/img/llhhallwakek.jpg" width="1740" height="500" />
        </lockup>
        <lockup Id="act3">
            <img src="https://abload.de/img/torrrzhkv4.jpg" width="1740" height="500" />
        </lockup>
        <lockup Id="act4">
            <img src="https://abload.de/img/n000ffjgf.jpg" width="1740" height="500" />
        </lockup>
		<lockup Id="act5">
            <img src="https://abload.de/img/blltknh.png" width="1740" height="500" />
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
            <title class="showTextOnHighlight">Extraction</title>
        </lockup>
        <lockup Id="act2">
            <img src="https://abload.de/img/71pra814mjl._ac_sy679ykkl2.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Bad Boys 2</title>
        </lockup>
        <lockup Id="act3">
            <img src="https://abload.de/img/e78bdb11c37f4fbbc37b59lkss.png" width="250" height="350" />
            <title class="showTextOnHighlight">Bloodshot</title>
        </lockup>
        <lockup Id="act4">
            <img src="https://abload.de/img/terminator-darkfatee4kbv.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Terminator Dark Fate</title>
        </lockup>
        <lockup Id="act5">
            <img src="https://abload.de/img/353a441c-b1a1-44c3-afftkd6.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Fast Furious Presents Hobbs Shaw</title>
        </lockup>
        <lockup Id="act6">
            <img src="https://abload.de/img/12040191-960464833704dfkn3.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Alita</title>
        </lockup>
        <lockup Id="act7">
            <img src="https://abload.de/img/81jpimw2qal._sl1500_4ojv7.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Tomb Raider</title>
        </lockup>
        <lockup Id="act8">
            <img src="https://abload.de/img/qikjy.png" width="250" height="350" />
            <title class="showTextOnHighlight">Deadpool 2</title>
        </lockup>
		<lockup Id="act9">
            <img src="https://abload.de/img/thumb_8fj8a4r48mqm6zovqjjb.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Street Fighter The Legend of Chun Li</title>
        </lockup>
		<lockup Id="act10">
            <img src="https://abload.de/img/thumb_9wkusy33mdpgmz0lkkz7.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Sleepless</title>
        </lockup>
		<lockup Id="act11">
            <img src="https://abload.de/img/thumb_pgh45ufjjmfsrhvayj20.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Chaos</title>
        </lockup>
		<lockup Id="act12">
            <img src="https://abload.de/img/81kmfutvytl._sy445_42jj8.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Rampage</title>
        </lockup>
		<lockup Id="act13">
            <img src="https://abload.de/img/thumb_upqaw07bgoljf3c61k5g.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Gods of Egypt</title>
        </lockup>
		<lockup Id="act14">
            <img src="https://abload.de/img/thumb_6tdefypv8magqfpvrkv3.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Taxi</title>
        </lockup>
		<lockup Id="act15">
            <img src="https://abload.de/img/escape-plan-3-the-extmgk00.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Escape Plan 3</title>
        </lockup>
		<lockup Id="act16">
            <img src="https://abload.de/img/thumb_nnny6go0yryjz3enbk03.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">A Hitman in London</title>
        </lockup>
		<lockup Id="act17">
            <img src="https://abload.de/img/vzja9.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Ant Man and the Wasp</title>
        </lockup>
		<lockup Id="act18">
            <img src="https://abload.de/img/thumb_wlk6g1igqttuc6vhokot.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Never Let Go</title>
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
            <title class="showTextOnHighlight">Triple Tap</title>
        </lockup>
        <lockup Id="asia2">
            <img src="https://abload.de/img/extreme_job77jw0.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Extreme Job</title>
        </lockup>
        <lockup Id="asia3">
            <img src="https://abload.de/img/syfjlj55.png" width="250" height="350" />
            <title class="showTextOnHighlight">Project Gutenberg</title>
        </lockup>
        <lockup Id="asia4">
          <img src="https://abload.de/img/thumb_ias8iizfau0usei18j2l.jpg" width="250" height="350" />
          <title class="showTextOnHighlight">The Prison</title>
        </lockup>
        <lockup Id="asia5">
            <img src="https://abload.de/img/thumb_baw9zdb1zjdws4im5kkz.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">The One</title>
        </lockup>
        <lockup Id="asia6">
            <img src="https://abload.de/img/190449865rk2p.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Chocolate</title>
        </lockup>
        <lockup Id="asia7">
            <img src="https://abload.de/img/51-rp7z5ssl._sy445_taj7s.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Ong Bak 3</title>
        </lockup>
        <lockup Id="asia8">
            <img src="https://abload.de/img/7b9f169057-ec71-4459-otja6.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Police Story</title>
        </lockup>
        <lockup Id="asia9">
            <img src="https://abload.de/img/eqdtvlcwloj1oqvsdfxaz3gjgr.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Ninja Assassin</title>
        </lockup>
        <lockup Id="asia10">
            <img src="https://abload.de/img/29ba7c88c2992020ac3340cjvh.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Bodyguards and Assassins</title>
        </lockup>
		<lockup Id="asia11">
            <img src="https://abload.de/img/thumb_6ryx89wtk7u08odljj8z.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Flash Point</title>
        </lockup>
        </section>
    </shelf>
	
	<shelf>
        <header>
          <title>Horror Thriller</title>
        </header>
        <section>
        <lockup Id="hor1">
            <img src="https://abload.de/img/20903380kn7.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">It Chapter Two</title>
        </lockup>
        <lockup Id="hor2">
            <img src="https://abload.de/img/thumb_antrxw6aggics9a3tj7i.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Prey</title>
        </lockup>
        <lockup Id="hor3">
            <img src="https://abload.de/img/thumb_cfglndeztgezw5nwakjt.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">The Night Watchmen</title>
        </lockup>
        <lockup Id="hor4">
          <img src="https://abload.de/img/thumb_gvbvilcmaewkhgj84jcg.jpg" width="250" height="350" />
          <title class="showTextOnHighlight">Jigsaw</title>
        </lockup>
        <lockup Id="hor5">
            <img src="https://abload.de/img/cucuy-theboogeymanxijxw.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Cucuy The Boogeyman</title>
        </lockup>
        <lockup Id="hor6">
            <img src="https://abload.de/img/91ea12bcxohl._sy445_kykz2.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Escape Room</title>
        </lockup>
        <lockup Id="hor7">
            <img src="https://abload.de/img/08451090ckdo.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Kidnapping Stella</title>
        </lockup>
        <lockup Id="hor8">
            <img src="https://abload.de/img/208373bejc6.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">US</title>
        </lockup>
        <lockup Id="hor9">
            <img src="https://abload.de/img/wounds-british-movie-qgj3v.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Wounds</title>
        </lockup>
        <lockup Id="hor10">
            <img src="https://abload.de/img/81ea890cf-l._sy445_g1jgk.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">MA</title>
        </lockup>
		<lockup Id="hor11">
            <img src="https://abload.de/img/thumb_itrxg5w46jwnwlrq5k56.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">House of 9</title>
        </lockup>
		<lockup Id="hor12">
            <img src="https://abload.de/img/thumb_u1a9qtv59lehn6171jg1.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Escapee</title>
        </lockup>
        </section>
    </shelf>
	
	<shelf>
        <header>
          <title>Komedie</title>
        </header>
        <section>
        <lockup Id="kom1">
            <img src="https://abload.de/img/thumb_ounyskl3mjsr1szk8jm2.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Balls of Fury</title>
        </lockup>
        <lockup Id="kom2">
            <img src="https://abload.de/img/thumb_3murojiqrtqj9wjsqjqa.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Get Santa</title>
        </lockup>
        <lockup Id="kom3">
            <img src="https://abload.de/img/thumb_e2pehldpj2weeeueak4j.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">A Haunted House</title>
        </lockup>
        <lockup Id="kom4">
          <img src="https://abload.de/img/thumb_vns4lb5rnx2zucviwjy0.jpg" width="250" height="350" />
          <title class="showTextOnHighlight">Johnny English Reborn</title>
        </lockup>
        <lockup Id="kom5">
            <img src="https://abload.de/img/thumb_aywymsb43csqp7anfj8k.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">De Lautre Cote Du Periph</title>
        </lockup>
        <lockup Id="kom6">
            <img src="https://abload.de/img/v1otjic.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Sextuplets</title>
        </lockup>
        <lockup Id="kom7">
            <img src="https://abload.de/img/3533812ejjbs.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Enes Batur Gercek Kahraman</title>
        </lockup>
        <lockup Id="kom8">
            <img src="https://abload.de/img/thumb_hshqq5oqciraacy8ckxz.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Take the 10</title>
        </lockup>
        <lockup Id="kom9">
            <img src="https://abload.de/img/readfile.phprdtype3fio3jdl.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">He Even Has Your Eyes</title>
        </lockup>
        <lockup Id="kom10">
            <img src="https://abload.de/img/thumb_93fnzeyljnzd2hlbukrz.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Sucker</title>
        </lockup>
		<lockup Id="kom11">
            <img src="https://abload.de/img/thumb_itgiblvgx5fg5krgdjw5.jpg" width="250" height="350" />
            <title class="showTextOnHighlight">Grown Ups 2</title>
        </lockup>
        </section>
    </shelf>
	
    </collectionList>
  </stackTemplate>
</document>`
}
