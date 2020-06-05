/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A catalog template allows you to display groupings of related items, such as genres of movies or TV shows. View the list of groupings on the left and focus on one to see its items on the right.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      .templateBackground {
          background-color: #091a2a;
      }
      </style>
    </head>
    <catalogTemplate class="templateBackground" theme="dark">
      <banner>
        <title>Categories</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Turksat TV</title>
          </header>
          <listItemLockup>
            <title>Ulusal</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
        <lockup Id="ul1">
          <img src="http://data.radiomyme.com/tv/resources/images/radio/DanceWave.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Dance Wave</title>
        </lockup>
        <lockup Id="ul2">
          <img src="http://data.radiomyme.com/tv/resources/images/radio/ibizaglobalradio.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Ibiza Global Radio</title>
        </lockup>
         <lockup Id="ul3">
          <img src="http://data.radiomyme.com/tv/resources/images/radio/sunshinelive.jpg" width="308" height="308" />
          <title class="showTextOnHighlight">Sunshine Live</title>
        </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Haber</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
        <lockup Id="hab1">
            <img src="http://data.radiomyme.com/tv/resources/images/radio/NRJ.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">NRJ</title>
        </lockup>
        <lockup Id="hab2">
            <img src="http://data.radiomyme.com/tv/resources/images/radio/DanceWave.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">Dance Wave</title>
        </lockup>
        <lockup Id="hab3">
            <img src="http://data.radiomyme.com/tv/resources/images/radio/hotmix.jpg" width="308" height="308" />
            <title class="showTextOnHighlight">HotMix Radio Dance</title>
        </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
