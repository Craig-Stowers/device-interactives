var hotlinks = [
      {
         id: "FrontCamera",
         x: 62,
         y: 44,
      },
      {
         id: "VolumeButton",
         x: 64,
         y: 27,
      },
      {
         id: "PowerButton",
         x: 64,
         y: 15,
      },
      {
         id: "StatusSymbols",
         x: 56,
         y: 4,
      },
      {
         id: "ChargingAndHeadphones",
         x: 34,
         y: 89,
      },
      {
         id: "Microphone",
         x: 18,
         y: 89,
      },
      {
         id: "HomeScreenAndApps",
         x: 34,
         y: 50,
      },
      {
         id: "SIMCard",
         x: 64,
         y: 75,
      },
      {
         id: "HomeButton",
         x: 34,
         y: 80,
      },
      {
         id: "RearCamera",
         x: 11,
         y: 8,
      },
   ],
   panelContent = {
      FrontCamera: {
         title: ["Front camera"],
         content: [
            `<span>The front-facing camera is 
        often used for taking self-portraits 
        (also known as <strong>selfies</strong>) 
        and making video calls.</span> `,
         ],
      },
      HomeButton: {
         title: ["Home button"],
         content: [
            `<span>The <strong>Home button</strong> is located at the bottom of your 
        screen and can be used to return you to the <strong>Home screen</strong> 
        at any time.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The symbols displayed on the screen 
        provide important, at-a-glance 
        information, such as:</span>
        <span><strong>Battery:</strong> 
        Indicates battery charge level.</span>
      `,

            `<span><strong>Reception bars:</strong> 
        If your tablet uses a SIM, these indicate the strength 
        of the mobile network signal. The more solid bars, 
        the better the signal.</span>
      `,

            `<span><strong>Network provider:</strong> 
        If your tablet uses a SIM, you will see your mobile data network 
        provider's name here.</span>`,

            `<span><strong>4G/5G/LTE:</strong> 
        Indicate which mobile network type your tablet is connected to. 
        These can change automatically depending on your location.</span> `,

            `<span><strong>Wi-Fi:</strong> 
        Indicates your tablet is 
        connected to Wi-Fi and not using 
        your mobile data.</span>`,

            `<span><strong>Date and time:</strong> 
        When your tablet is locked, the date and time will display.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power button"],
         content: [
            `<span>To turn your tablet on, press and hold 
        the power button until the manufacturer's name appears. 
        Depending on the model, you may need to press the volume and power buttons at the same time.</span>`,

            `<span>To turn your tablet off, 
        hold this button down for a few seconds
        until the <strong>Power off</strong> 
        icon appears. Tap the icon to turn off your tablet.</span>`,

            `<span>To save battery, you can 
        put your tablet into <strong>sleep mode</strong>  
        with a short, single 
        press of the power button. 
        Wake your tablet up again
        with another short, single 
        press of the power button.</span>`,
         ],
      },
      VolumeButton: {
         title: ["Volume button"],
         content: [
            `<span>This button allows you to adjust the volume of video calls or sound, 
        such as music, on your tablet. 
        The top of the button turns the volume up, and the bottom turns it down.</span>`,

            `<span>Press once for a small increase or decrease in volume. 
        Press and hold for a bigger volume increase or decrease. 
        You will see the change in volume on the screen.</span>`,
         ],
      },
      Microphone: {
         title: ["Microphone"],
         content: [
            `<span>Android tablets have at least one microphone built 
        into the top or bottom edge. It is sensitive enough to 
        pick up your voice when you make a voice or video call.</span>`,
         ],
      },
      ChargingAndHeadphones: {
         title: ["Charging port", "Charging port", "Headphone socket"],
         content: [
            `<span>This small gap in the base of the tablet is where you insert your cable to recharge your tablet.</span>`,

            `<span>The other end of the cable connects to the mains 
        socket via the tablet's AC adaptor, or into your computer. 
        Once both ends are connected your tablet will start charging.</span>`,

            `<span>This port is also where you can plug in your headphones. 
        You can use your headphones to listen to music, hear alerts or for participating in video calls.</span>`,
         ],
      },
      HomeScreenAndApps: {
         title: ["Home screen and apps"],
         content: [
            `<span>The <strong>Home screen</strong> is the main screen on your tablet. 
        It shows icons for some of the installed apps, including:</span>
        <span><strong>Phone:</strong> If your tablet uses a SIM, you may be able to make and receive calls like a mobile phone.</span>`,

            `<span><strong>Messages:</strong> For sending text and picture messages to friends and family.</span>`,

            `<span><strong>Internet:</strong> For browsing the internet.</span>`,

            `<span><strong>Camera:</strong> Used for taking photos and videos.</span>`,

            `<span><strong>Email or Gmail:</strong> For reading and sending emails.</span>`,

            `<span><strong>Weather:</strong> To check today's weather and the weekly forecast.</span>`,

            `<span>For more apps, swipe your finger up from the middle of the screen to view the <strong>Apps screen</strong>. 
        If your apps do not fit on one screen, your tablet will create new screens. 
        To see them, swipe left or right.</span>`,
         ],
      },
      SIMCard: {
         title: [
            "SIM card",
            "SIM card sizes",
            "SIM Tray",
            "Insert SIM card",
            "Insert SIM card",
            "Insert SIM card",
            "Insert SIM card",
         ],
         content: [
            `<span>Some tablet models can use a <strong>SIM card</strong> to connect to the internet when there's no available Wi-Fi network. 
        Some tablets can also use a SIM card to make mobile phone calls.</span>`,

            `<span>A SIM card will come in a plastic template. 
        To identify which size SIM card to remove from the 
        template, you first need to find and open your 
        tablet's <strong>SIM Tray</strong>.</span>`,

            `<span>The SIM Tray is a small drawer that slots into the side of the tablet and is designed to hold the SIM card.</span>`,

            `<span>Using the <strong>SIM Ejector Tool</strong> that comes 
        with your tablet, push the fine needle point gently into 
        the hole on the side of the tablet. The tray will pop out.</span>`,

            `<span>Look at the tray and see which size SIM card fits, 
        then carefully push the correct one out of the template. 
        Try not to touch the gold side of the SIM card.</span>`,

            `<span>Once the SIM card is sitting flush in the tray, 
        gently push the SIM Tray back into the tablet. If the tray resists, don't force it. 
        Check the SIM card is placed correctly and try again.</span>`,
         ],
      },
      RearCamera: {
         title: ["Rear camera"],
         content: [
            `<span>Most tablets have two cameras. 
        The rear-facing camera is used for taking photos and videos and may have multiple lenses for capturing high-quality images.</span>`,
         ],
      },
   },
   animationsObject = {
      FrontCamera: [
         {
            link: "./animations/01_FrontCamera/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      HomeButton: [
         {
            link: "./animations/02_HomeButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeSwipe",
         },
      ],
      StatusSymbols: [
         {
            link: "./animations/03_StatusSymbols/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_StatusSymbols/02/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_StatusSymbols/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_StatusSymbols/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_StatusSymbols/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/03_StatusSymbols/06/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerButton: [
         {
            link: "./animations/04_PowerButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_PowerButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_PowerButton/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      VolumeButton: [
         {
            link: "./animations/05_VolumeButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinked",
         },
         {
            link: "./animations/05_VolumeButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinked",
         },
      ],
      Microphone: [
         {
            link: "./animations/06_Microphone/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      ChargingAndHeadphones: [
         {
            link: "./animations/07_ChargingAndHeadphones/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_ChargingAndHeadphones/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_ChargingAndHeadphones/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileLessScaling",
         },
      ],
      HomeScreenAndApps: [
         {
            link: "./animations/08_HomeScreenAndApps/01/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/06/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "./animations/08_HomeScreenAndApps/07/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      SIMCard: [
         {
            link: "./animations/09_SIMCard/01/01_SIMCard.svg",
            loop: false,
            static: true,
            isImage: true,
            class: "mobileImg",
         },
         {
            link: "./animations/09_SIMCard/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileTopRow",
         },
         {
            link: "./animations/09_SIMCard/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_SIMCard/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_SIMCard/05/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "./animations/09_SIMCard/06/data.json",
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
            class: "mobileHomeScreen",
         },
      ],
   };

const deviceTitle = "Get to know your Android tablet",
   device = "device__androidTablet",
   deviceFront__Id = "#androidTablet__front",
   deviceBack__Id = "#androidTablet__back",
   turnDeviceBackAltCTA_Text = "View tablet back",
   turnDeviceFrontAltCTA_Text = "View tablet front";

export {
   animationsObject,
   device,
   deviceBack__Id,
   deviceFront__Id,
   deviceTitle,
   hotlinks,
   panelContent,
   turnDeviceBackAltCTA_Text,
   turnDeviceFrontAltCTA_Text,
};
