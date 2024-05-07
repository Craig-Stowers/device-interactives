var hotlinks = [
      {
         id: "StatusSymbols",
         x: 48,
         y: 1,
      },
      {
         id: "FrontCamera",
         x: 34,
         y: 1,
      },
      {
         id: "PowerButton",
         x: 58,
         y: 35,
      },
      {
         id: "VolumeButtons",
         x: 58,
         y: 20,
      },
      {
         id: "HomeScreenAndApps",
         x: 34,
         y: 50,
      },
      {
         id: "Microphone",
         x: 48,
         y: 91,
      },
      {
         id: "ChargingAndHeadphones",
         x: 34,
         y: 91,
      },
      {
         id: "SIMCard",
         x: 20,
         y: 91,
      },
      {
         id: "HomeButton",
         x: 34,
         y: 80,
      },
      {
         id: "RearCamera",
         x: 20,
         y: 8,
      },
   ],
   panelContent = {
      FrontCamera: {
         title: ["Front camera"],
         content: [
            `<span>The front-facing camera is often used 
        for taking self-portraits (also known as <strong>selfies</strong>)
        and making video calls.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The icons displayed on the screen provide important at-a-glance 
        information, such as:</span>
        <span><strong>Battery:</strong> Indicates current battery level</span>
      `,

            `<span><strong>Reception bars:</strong> 
        Indicate the strength of the mobile network's signal. 
        The more solid bars, the better the signal.</span>
      `,

            `<span><strong>Network provider:</strong> 
        You will see your mobile phone network provider's name here.</span>`,

            `<span><strong>3G/4G/5G/LTE:</strong> 
        Indicate which mobile data type your phone is connected to. 
        These can change automatically depending on your location.</span>`,

            `<span><strong>Wi-Fi:</strong> 
        Indicates your phone is connected to Wi-Fi and not using your mobile data.</span>`,

            `<span><strong>Date and time:</strong> 
        When your phone is locked, the date and time will display.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power button"],
         content: [
            `<span>To turn your phone on, press and hold the power button until the 
        phone manufacturer's name appears.</span>`,

            `<span>To turn your phone off, hold this button down 
        for a few seconds until the <strong>Power off</strong> icon 
        appears. To turn your phone off, simply tap this icon.</span>`,

            `<span>To save battery, you can put your phone 
        into <strong>sleep mode</strong> with a short, single press of
        the power button. Wake your phone up again with another 
        short, single press of the power button. </span>
      `,
         ],
      },
      VolumeButtons: {
         title: ["Volume buttons"],
         content: [
            `<span>These buttons allow you to adjust the volume of phone calls or sound, such as music, on your phone. The top button turns the volume up, and the bottom one turns it down.</span>`,

            `<span>Press once for a small increase or decrease 
        in volume. Press and hold for a bigger volume increase or 
        decrease. You will see the change in volume on the screen.</span>`,
         ],
      },
      SIMCard: {
         title: ["SIM card", "SIM card sizes", "SIM Tray", "Insert SIM card", "Insert SIM card", "Insert SIM card"],
         content: [
            `<span>A SIM card is a small piece of plastic that contains the
        data needed for a mobile phone number. 
        Your phone needs a SIM card to make and receive calls.</span>`,

            `<span>Your SIM card will come in a plastic template. 
        To identify which size SIM card to remove from the 
        template, you first need to find and open your 
        phone's <strong>SIM Tray</strong></span>`,

            `<span>The SIM Tray is a small drawer that slots into the top or side 
        of the phone and is designed to hold your SIM card.</span>`,

            `<span>Using the <strong>SIM Ejector Tool</strong> that comes with 
        your phone, push the fine needle point gently 
        into the hole. The tray will pop out.</span>`,

            `<span>Look at the tray and see which size SIM card fits, 
        then carefully push the correct one out of the template. 
        Try not to touch the gold side of the SIM card</span>`,

            `<span>Once your SIM card is sitting flush in the tray, 
        gently push the SIM Tray back into the phone. If 
        the tray resists, don't force it. Check the SIM 
        card is placed correctly and try again.</span>`,
         ],
      },
      HomeScreenAndApps: {
         title: ["Home screen and apps"],
         content: [
            `<span>The <strong>Home screen</strong> is the main screen on your phone. 
        It shows icons for some of the installed apps, including:</span>
        <span><strong>Phone:</strong> Used to make phone calls.</span>`,

            `<span><strong>Messages:</strong> For sending text and picture messages to friends and family.</span>`,

            `<span><strong>Internet:</strong> For browsing the internet.</span>`,

            `<span><strong>Camera:</strong> Used for taking photos and videos.</span>`,

            `<span><strong>Email or Gmail:</strong> For reading and sending emails.</span>`,

            `<span><strong>Weather:</strong> To check today's weather and the weekly forecast.</span>`,

            `<span>For more apps, swipe your finger up from the 
        middle of the screen to view the <strong>Apps screen.</strong> 
        If your apps do not fit on one screen, your 
        phone will create new screens. To see them, swipe left or right.</span>`,
         ],
      },
      HomeButton: {
         title: ["Home button"],
         content: [
            `<span>The <strong>Home button</strong> is located at the bottom of your screen and can be used to return you to the Home screen at any time</span>`,
         ],
      },
      Microphone: {
         title: ["Microphone"],
         content: [
            `<span>This is where the phone's microphone is located and is 
        sensitive enough to pick up your voice when you make a phone call.</span>`,
         ],
      },
      ChargingAndHeadphones: {
         title: ["Charging port", "Charging port", "Headphone socket"],
         content: [
            `<span>This small gap in the base of the phone is where you insert one 
        end of the cable to recharge your phone.</span>`,

            `<span>The other end of the cable connects to the mains socket via the 
        phone's AC adaptor, or into your computer. Once both
        ends are connected your phone will start charging.</span>`,

            `<span>This port is also where you can plug in your headphones. You can use 
        your headphones to listen to music, hear alerts or make phone calls.</span>`,
         ],
      },
      RearCamera: {
         title: ["Rear camera"],
         content: [
            `<span>Most phones have two cameras. The rear-facing camera is used for taking photos and videos and may have multiple lenses for capturing high-quality images.</span>`,
         ],
      },
   },
   animationsObject = {
      FrontCamera: [
         {
            link: "./animations/01_FrontCamera/01/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      StatusSymbols: [
         {
            link: "./animations/02_StatusSymbols/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_StatusSymbols/02/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_StatusSymbols/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_StatusSymbols/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_StatusSymbols/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_StatusSymbols/06/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerButton: [
         {
            link: "./animations/03_PowerButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_PowerButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_PowerButton/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      VolumeButtons: [
         {
            link: "./animations/04_VolumeButtons/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedLessScaling",
         },
         {
            link: "./animations/04_VolumeButtons/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedLessScaling",
         },
      ],
      SIMCard: [
         {
            link: "./animations/05_SIMCard/01/01_SIMCard.svg",
            loop: false,
            static: true,
            isImage: true,
            class: "mobileImg",
         },
         {
            link: "./animations/05_SIMCard/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_SIMCard/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_SIMCard/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_SIMCard/05/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/05_SIMCard/06/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      HomeScreenAndApps: [
         {
            link: "./animations/06_HomeScreenAndApps/01/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/06_HomeScreenAndApps/02/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/06_HomeScreenAndApps/03/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/06_HomeScreenAndApps/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/06_HomeScreenAndApps/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/06_HomeScreenAndApps/06/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/06_HomeScreenAndApps/07/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
      ],
      HomeButton: [
         {
            link: "./animations/07_HomeButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeSwipe",
         },
      ],
      Microphone: [
         {
            link: "./animations/08_Microphone/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      ChargingAndHeadphones: [
         {
            link: "./animations/09_ChargingAndHeadphones/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_ChargingAndHeadphones/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_ChargingAndHeadphones/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      RearCamera: [
         {
            link: "./animations/10_RearCamera/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
   };

const androidObject = {
   hotlinks,
   panelContent,
   animationsObject,
};

export default androidObject;

// const deviceTitle = "Get to know your Android phone",
//    device = "device__android",
//    deviceFront__Id = "#android__front",
//    deviceBack__Id = "#android__back",
//    turnDeviceBackAltCTA_Text = "View phone back",
//    turnDeviceFrontAltCTA_Text = "View phone front";
