var hotlinks = [
      {
         id: "Monitor",
         x: 23,
         y: 33,
      },
      {
         id: "Desktop",
         x: 45,
         y: 33,
      },
      {
         id: "AppleMenu",
         x: 12,
         y: 20,
      },
      {
         id: "StatusSymbols",
         x: 52,
         y: 20,
      },
      {
         id: "Webcam",
         x: 34,
         y: 20,
      },
      {
         id: "PowerButton",
         x: 58,
         y: 51,
      },
      {
         id: "Trackpad",
         x: 34,
         y: 67,
      },
      {
         id: "Keyboard",
         x: 34,
         y: 58,
      },
      {
         id: "Dock",
         x: 34,
         y: 48,
      },
      {
         id: "LeftConnectorPorts",
         x: 15,
         y: 71,
      },
      {
         id: "RightChargingPort",
         x: 53,
         y: 71,
      },
   ],
   panelContent = {
      Monitor: {
         title: ["Monitor"],
         content: [
            `<span>The <strong>monitor</strong>, or screen, lets you see what's happening on your MacBook.</span> `,
         ],
      },
      Webcam: {
         title: ["Webcam"],
         content: [
            `<span>Your MacBook has a camera at the top of the monitor called a <strong>webcam</strong>. 
      It's used for making FaceTime and video calls and automatically turns on when you need it.</span>`,

            `<span>A small light may be visible when the webcam is in use.</span>`,
         ],
      },
      Desktop: {
         title: ["Desktop"],
         content: [
            `<span>The <strong>desktop</strong> is the main screen on your MacBook. 
      It's a quick way to find the apps, functions, files and folders.</span>`,
         ],
      },
      AppleMenu: {
         title: ["Apple Menu"],
         content: [
            `<span>The <strong>Apple Menu</strong> contains important functions and settings, including:</span>
      <span><strong>System Settings:</strong> For accessing features and menus that let you set up your MacBook the way you like.</span>`,

            `<span><strong>Sleep:</strong>  For saving power when you're not using your MacBook. 
        To wake up your MacBook, press any key on the keyboard or click the trackpad. </span>`,

            `<span><strong>Shut Down:</strong> For turning off your MacBook to stop it from using power. 
        To turn your MacBook back on, press and hold the power button at the top right of the keyboard.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The icons on the top right of the screen provide useful information and tools, such as:</span>
      <span><strong>Battery:</strong> Indicates the amount of charge in your MacBook's battery.</span>
      `,

            `<span><strong>Wi-Fi:</strong> Indicates if your MacBook is connected to Wi-Fi and the internet.</span>`,

            `<span><strong>Spotlight:</strong> Find files and applications on your MacBook by typing into the search 
      field then choosing from the list of results.</span>`,

            `<span><strong>Control Centre:</strong> Lets you adjust common settings such as volume, screen brightness and wireless connections.</span>`,

            `<span><strong>Date and time:</strong> The current date and time are displayed here.`,
         ],
      },
      Dock: {
         title: ["Dock"],
         content: [
            `<span>The <strong>Dock</strong> lets you quickly access frequently used applications, including:</span>
      <span><strong>Finder:</strong> For locating documents, downloads, and applications installed on your MacBook.</span>
      `,

            `<span><strong>Safari:</strong> For browsing the internet.</span>`,

            `<span><strong>Mail:</strong> For reading and sending emails.</span>`,

            `<span><strong>FaceTime:</strong> For making video calls.</span>`,

            `<span><strong>Calendar:</strong> For making and keeping track of appointments.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power Button"],
         content: [
            `<span>To turn your MacBook on, press and hold the power button at the top right of the keyboard. 
        An Apple logo will appear on the screen, and you might also hear a chime.</span>`,

            `<span>To turn your MacBook off, save and close any files and applications you have open, 
        then press and hold the power button.</span>`,
         ],
      },
      Trackpad: {
         title: ["Trackpad", "Trackpad", "Left click", "Right click", "Scroll"],
         content: [
            `<span>The <strong>trackpad</strong>, or touchpad, does the same job as a mouse. It lets you select and open items on the screen. 
        If you prefer, you can use a mouse with your MacBook instead.</span>`,

            `<span>When you slide your finger along the trackpad, the <strong>pointer</strong> will move in the same direction on the screen. 
        The pointer can also be called a <strong>cursor</strong>.</span>`,

            `<span>To select an item,  move the pointer over it then use one finger to press on the trackpad. 
        This is called a <strong>left click</strong>. To open the item, press twice quickly. This is called a <strong>double click</strong>.</span>`,

            `<span>To see more options for an item, 
        move the pointer over it then use two fingers to tap on the touchpad. 
        This opens a menu and is called a <strong>right click.</strong>
        Use one finger to select from the list, or left click outside the menu to close it.</span>`,

            `<span>To scroll a document or web page, slide two fingers up or down the trackpad. </span>`,
         ],
      },
      Keyboard: {
         title: ["Keyboard"],
         content: [
            `<span>The keyboard lets you type letters, numbers and symbols. 
      It also lets you adjust volume, sound and many other settings.</span>`,
         ],
      },
      LeftConnectorPorts: {
         title: ["Connector ports", "USB ports", "Headphone socket"],
         content: [
            `<span>Your MacBook has sockets, or ports, for connecting devices, such as a camera, mouse, keyboard, monitor, or memory stick for saving and sharing files. 
        The ports can be on one or both sides of your MacBook.</span>`,

            `<span>Devices connect  to the ports on your MacBook via USB cables. There are different types of USB cables, 
      and you may need an adapter to match the port on your MacBook.</span>`,

            `<span>This is where you can connect your cabled headphones or an additional speaker to your MacBook.</span>`,
         ],
      },
      RightChargingPort: {
         title: ["Charging Port"],
         content: [
            `<span>To recharge your MacBook's battery, connect its charger cable into this port and the other end to the mains socket. 
        The type and location of the port will differ depending on your MacBook model.</span>`,

            `<span>Once both ends are connected, your MacBook will start charging. 
        To avoid running out of battery, plug your MacBook into mains power while you are using it.</span>`,
         ],
      },
   },
   animationsObject = {
      Monitor: [
         {
            link: "./animations/01_Monitor/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Webcam: [
         {
            link: "./animations/02_Webcam/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/02_Webcam/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Desktop: [
         {
            link: "./animations/03_Desktop/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      AppleMenu: [
         {
            link: "./animations/04_AppleMenu/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_AppleMenu/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_AppleMenu/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      StatusSymbols: [
         {
            link: "./animations/05_StatusSymbols/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_StatusSymbols/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_StatusSymbols/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_StatusSymbols/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/05_StatusSymbols/05/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Dock: [
         {
            link: "./animations/06_Dock/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Dock/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Dock/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Dock/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Dock/05/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerButton: [
         {
            link: "./animations/07_PowerButton/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_PowerButton/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Trackpad: [
         {
            link: "./animations/08_Trackpad/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Trackpad/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Trackpad/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Trackpad/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShinkedScrollScaling",
         },
         {
            link: "./animations/08_Trackpad/05/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShinkedScrollScaling",
         },
      ],
      Keyboard: [
         {
            link: "./animations/09_Keyboard/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      LeftConnectorPorts: [
         {
            link: "./animations/10_LeftPorts/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_LeftPorts/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_LeftPorts/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      RightChargingPort: [
         {
            link: "./animations/11_RightChargingPort/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/11_RightChargingPort/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
   };

export default { hotlinks, panelContent, animationsObject };

// const deviceTitle = "Get to know your MacBook",
//    device = "device__macBook",
//    deviceFront__Id = "#macBook__front",
//    deviceLeft__Id = "#macBook__left",
//    deviceRight__Id = "#macBook__right",
//    turnDeviceLeftAltCTA_Text = "View left",
//    turnDeviceRightAltCTA_Text = "View right",
//    turnDeviceFrontAltCTA_Text = "View front";
