var views = ["front", "back"];

var hotlinks = [
      {
         id: "FrontCamera",
         x: 65,
         y: 44,
      },
      {
         id: "VolumeButtons",
         x: 67,
         y: 10,
      },
      {
         id: "StatusSymbols",
         x: 59,
         y: 6,
      },
      {
         id: "PowerButton",
         x: 59,
         y: -2,
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
         id: "HomeSwipe",
         x: 34,
         y: 82,
      },
      {
         id: "HomeScreenAndApps",
         x: 34,
         y: 50,
      },
      {
         id: "SIMCard",
         x: 67,
         y: 75,
      },
      {
         id: "RearCamera",
         x: 8,
         y: 6,
      },
   ],
   panelContent = {
      FrontCamera: {
         title: ["Front camera"],
         content: [
            `<span>The front-facing camera is 
        often used for taking self-portraits 
        (also known as <strong>selfies</strong>), 
        FaceTime and video chats</span> `,
         ],
      },
      HomeSwipe: {
         title: ["Return to Home screen"],
         content: [
            `<span>Swipe your finger up from the bottom edge of the 
        screen to return to the <strong>Home screen</strong>.
        If your iPad has a physical Home button, you
        can press it instead.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The icons displayed on the screen 
        provide important at-a-glance 
        information, such as:</span>
        <span><strong>Battery:</strong> 
        Indicates current battery level.</span>
      `,

            `<span><strong>Reception bars:</strong> 
        If your iPad uses a SIM, these indicate the strength 
        of the mobile data network signal. The more solid bars, 
        the better the signal.</span>
      `,

            `<span><strong>Network provider:</strong> 
        If your iPad uses a SIM, you will see your mobile data network 
        provider's name here.</span>`,

            `<span><strong>4G/5G/LTE:</strong> 
        If your iPad uses a SIM, these indicate which mobile data type it is connected to. 
        These can change automatically depending on your location. </span> `,

            `<span><strong>Wi-Fi:</strong> 
        Indicates your iPad is 
        connected to Wi-Fi , and not using 
        your mobile data.</span>`,

            `<span><strong>Date and time:</strong> 
        When your iPad is locked, the date and time will display.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power button"],
         content: [
            `<span>To turn your iPad on, press and hold 
        the power button until the Apple logo appears.</span>`,

            `<span>To turn your iPad off, 
        hold this button down and 
        press the up or down 
        volume button on the right 
        until the <strong>slide to power</strong> 
        off message appears, then
        slide your finger across 
        the message from the left.</span>`,

            `<span>To save battery, you can 
        put your iPad into <strong>sleep mode</strong>  
        with a short, single 
        press of the power button. 
        Wake your iPad up again
        with another short, single 
        press of the power button.</span>`,
         ],
      },
      VolumeButtons: {
         title: ["Volume buttons"],
         content: [
            `<span>These buttons allow you to adjust the volume of video 
        calls or sound, such as music, on your iPad. 
        The top button turns the volume up, and the bottom one turns it down.</span>`,

            `<span>Press once for a small increase or decrease in volume. 
        Press and hold for a bigger volume increase or decrease. 
        You will see the change in volume on the screen.</span>`,
         ],
      },
      Microphone: {
         title: ["Microphone"],
         content: [
            `<span>All iPads have at least one built-in microphone, 
        which is sensitive enough to pick up your voice when you make a video call. </span>`,
         ],
      },
      ChargingAndHeadphones: {
         title: ["Charging port", "Charging port", "Headphone socket"],
         content: [
            `<span>This small gap in the base of the iPad is where you insert your cable to recharge your iPad.</span>`,

            `<span>The other end of the cable connects to the mains 
        socket via the iPad's AC adaptor, or into your computer. 
        Once both ends are connected your iPad will start charging.</span>`,

            `<span>This port is also where you can plug in your headphones. 
        You can use your headphones to listen to music, hear alerts or when participating in video calls.</span>`,
         ],
      },
      HomeScreenAndApps: {
         title: ["Home screen and apps"],
         content: [
            `<span>The <strong>Home screen</strong> is the main screen on your iPad. 
        It shows icons for some of the installed apps, including:</span>
        <span><strong>Safari:</strong> For browsing the internet.</span>`,

            `<span><strong>Messages:</strong> For sending text and picture messages to friends and family.</span>`,

            `<span><strong>FaceTime:</strong> Used to make video calls.</span>`,

            `<span><strong>Camera:</strong> Used for taking photos and videos.</span>`,

            `<span><strong>Mail:</strong> For reading and sending emails.</span>`,

            `<span><strong>Weather:</strong> To check today's weather and the weekly forecast.</span>`,

            `<span>If all of your apps do not fit on one <strong>Home screen</strong>, 
        your iPad will create another screen automatically. 
        To see them, swipe your finger left or right on the 
        screen.</span>`,
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
            `<span>Some iPads can use a <strong>SIM card</strong> to connect to the internet when there's no available Wi-Fi network. .</span>`,

            `<span>A SIM card will come in a plastic template. 
        To identify which size SIM card to remove from the 
        template, you first need to find and open your 
        iPad's <strong>SIM Tray</strong></span>`,

            `<span>The SIM Tray is a small drawer that slots into the side of the iPad and is designed to hold your SIM card.</span>`,

            `<span>Using the <strong>SIM Ejector Tool</strong> that comes 
        with your iPad, push the fine needle point gently into 
        the hole on the side of the iPad. The tray will pop out.</span>`,

            `<span>Look at the tray and see which size SIM card fits, 
        then carefully push the correct one out of the template. 
        Try not to touch the gold side of the SIM card.</span>`,

            `<span>With the SIM card loaded, gently push the SIM Tray back into your iPad. If the tray resists, 
        don't force it. Check the SIM card is placed correctly and try again. </span>`,
         ],
      },
      RearCamera: {
         title: ["Rear camera"],
         content: [
            `<span>Most iPads have two cameras. The rear-facing camera is used for taking photos and videos and may have 
        multiple lenses for capturing high-quality images.</span>`,
         ],
      },
   },
   animationsObject = {
      FrontCamera: [
         {
            link: "animations/01_FrontCamera/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      HomeSwipe: [
         {
            link: "animations/02_HomeSwipe/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeSwipe",
         },
      ],
      StatusSymbols: [
         {
            link: "animations/03_StatusSymbols/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/03_StatusSymbols/02/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/03_StatusSymbols/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/03_StatusSymbols/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/03_StatusSymbols/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/03_StatusSymbols/06/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerButton: [
         {
            link: "animations/04_PowerButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/04_PowerButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/04_PowerButton/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      VolumeButtons: [
         {
            link: "animations/05_VolumeButtons/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinked",
         },
         {
            link: "animations/05_VolumeButtons/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinked",
         },
      ],
      Microphone: [
         {
            link: "animations/06_Microphone/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      ChargingAndHeadphones: [
         {
            link: "animations/07_ChargingAndHeadphones/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/07_ChargingAndHeadphones/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/07_ChargingAndHeadphones/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileLessScaling",
         },
      ],
      HomeScreenAndApps: [
         {
            link: "animations/08_HomeScreenAndApps/01/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/04/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/05/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/06/data.json",
            loop: false,
            static: true,
            isImage: false,
            class: "mobileHomeScreen",
         },
         {
            link: "animations/08_HomeScreenAndApps/07/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
      SIMCard: [
         {
            link: "animations/09_SIMCard/01/01_SIMCard.svg",
            loop: false,
            static: true,
            isImage: true,
            class: "mobileImg",
         },
         {
            link: "animations/09_SIMCard/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileTopRow",
         },
         {
            link: "animations/09_SIMCard/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/09_SIMCard/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "animations/09_SIMCard/05/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScalingTopRow",
         },
         {
            link: "animations/09_SIMCard/06/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      RearCamera: [
         {
            link: "animations/10_RearCamera/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileHomeScreen",
         },
      ],
   };

const deviceTitle = "Get to know your iPad",
   device = "device__iPad",
   deviceFront__Id = "#iPad__front",
   deviceBack__Id = "#iPad__back",
   turnDeviceBackAltCTA_Text = "View iPad back",
   turnDeviceFrontAltCTA_Text = "View iPad front";

export {
   views,
   hotlinks,
   panelContent,
   animationsObject,
   deviceTitle,
   device,
   deviceFront__Id,
   deviceBack__Id,
   turnDeviceBackAltCTA_Text,
   turnDeviceFrontAltCTA_Text,
};
