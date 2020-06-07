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
        <lockup Id="ulu1">
          <img src="https://abload.de/img/atvhdw1jzo.png" width="232" height="199" />
          <title class="showTextOnHighlight">ATV</title>
        </lockup>
        <lockup Id="ulu2">
          <img src="https://abload.de/img/startvgujhq.png" width="232" height="199" />
          <title class="showTextOnHighlight">STAR</title>
        </lockup>
         <lockup Id="ulu3">
          <img src="https://abload.de/img/showtvhd25jci.png" width="232" height="199" />
          <title class="showTextOnHighlight">SHOW TV</title>
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
            <img src="https://abload.de/img/ahabernok8d.png" width="232" height="199" />
            <title class="showTextOnHighlight">A HABER</title>
        </lockup>
        <lockup Id="hab2">
            <img src="https://abload.de/img/ntvr7jkv.png" width="232" height="199" />
            <title class="showTextOnHighlight">NTV</title>
        </lockup>
        <lockup Id="hab3">
            <img src="https://abload.de/img/cnnturkhdvgjlz.png" width="232" height="199" />
            <title class="showTextOnHighlight">CNN</title>
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
