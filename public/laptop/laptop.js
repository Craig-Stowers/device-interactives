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
         id: "StartMenu",
         x: 12,
         y: 49,
      },
      {
         id: "PowerButton",
         x: 58,
         y: 51,
      },
      {
         id: "StatusSymbols",
         x: 50,
         y: 49,
      },
      {
         id: "Webcam",
         x: 34,
         y: 20,
      },
      {
         id: "Touchpad",
         x: 34,
         y: 67,
      },
      {
         id: "Keyboard",
         x: 34,
         y: 54,
      },
      {
         id: "LeftPorts",
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
            `<span>The <strong>monitor</strong>, or screen, lets you see what's happening on your computer.</span> `,
         ],
      },
      Webcam: {
         title: ["Webcam"],
         content: [
            `<span>Your laptop monitor has a camera at the top called a <strong>webcam</strong>. 
        It's used for making video calls and automatically turns on when you need it.</span>`,

            `<span>A small light may be visible when the webcam is in use.</span>`,
         ],
      },
      Desktop: {
         title: ["Desktop"],
         content: [
            `<span>The <strong>desktop</strong> is the main screen on your computer. 
    It's a quick way to find the apps, functions, files and folders you need.</span>`,
         ],
      },
      StartMenu: {
         title: ["Start menu"],
         content: [
            `<span>The <strong>Start menu</strong> contains a list of important apps and settings, including:</span>
    <span><strong>Edge:</strong> For browsing the internet.</span>`,

            `<span><strong>Mail:</strong>  For reading and sending emails.</span>`,

            `<span><strong>Settings:</strong> For helping you set up your computer the way you like.</span>`,

            `<span><strong>Power:</strong> To <strong>Restart</strong> or <strong>Shut down</strong> your computer.</span>`,

            `<span><strong>Search:</strong> Find files and applications on your computer by typing into the search field then choosing from the list of results.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The icons displayed on the bottom right of the screen provide useful information and tools, such as:</span>
    <span><strong>Battery:</strong> Indicates the amount of charge in your computer battery.</span>
    `,

            `<span><strong>Wi-Fi:</strong> Indicates your computer is connected to Wi-Fi and the internet.</span>`,

            `<span><strong>Volume:</strong> For increasing, decreasing and muting sound on your computer.`,

            `<span><strong>Time and date:</strong> The current time and date are displayed here.</span>`,

            `<span><strong>Notifications:</strong> Click this symbol to view a summary of messages and updates you might have missed.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power button"],
         content: [
            `<span>To turn your computer on, press and hold the power button. When your computer is on, the monitor will show something on the screen.</span>`,

            `<span>To put your computer to sleep, press the power button once. 
        <strong>Sleep mode</strong> saves power, so you can use it when away from your computer for short time.</span>`,

            `<span>To wake your computer from sleep, press the power button once.</span>`,

            `<span>To turn your computer off, save and close any files and applications you have open, 
        then briefly press and hold the power button until the screen becomes black.</span>`,
         ],
      },
      Touchpad: {
         title: ["Touchpad", "Touchpad", "Left click", "Right click", "Scroll"],
         content: [
            `<span>The <strong>touchpad</strong>, or trackpad, does the same job as a mouse. It lets you select and open items on the screen. 
      If you prefer, you can use a mouse with your computer instead.</span>`,

            `<span>When you slide your finger along the touchpad, the <strong>pointer</strong> will move in the same direction on the screen. 
      The pointer can also be called a <strong>cursor</strong>.</span>`,

            `<span>To select an item,  move the pointer over it then use one finger to tap on the touchpad. 
      This is called a <strong>left click</strong>. To open the item, tap twice quickly. This is called a <strong>double click</strong>.</span>`,

            `<span>To see more options for an item, 
        move the pointer over it then use two fingers to tap on the touchpad. 
        This opens a menu and is called a <strong>right click.</strong>
        Use one finger to select from the list, or left click outside the menu to close it.</span>`,

            `<span>To scroll a document or web page, slide two fingers up or down the touchpad. </span>`,
         ],
      },
      Keyboard: {
         title: ["Keyboard"],
         content: [
            `<span>The keyboard lets you type letters, numbers and symbols. 
    It also lets you adjust volume, sound and many other settings.</span>`,
         ],
      },
      LeftPorts: {
         title: ["Connector ports", "USB ports", "HDMI port", "Headphone socket"],
         content: [
            `<span>Your computer has sockets, or ports, for connecting devices, such as a camera, mouse, keyboard, monitor or memory stick for saving and sharing files. 
        The ports can be on one or both sides of your computer.</span>`,

            `<span>Devices connect to the ports on your computer via USB cables. There are different types of USB cables, and you may need an adapter to match the port on the computer.</span>`,

            `<span>Some computers have this port for connecting to a larger monitor or a television.</span>`,

            `<span>This is where you can connect your cabled headphones or an additional speaker to your computer.</span>`,
         ],
      },
      RightChargingPort: {
         title: ["Charging Port"],
         content: [
            `<span>To recharge your computer's battery, connect its charger cable into this port  and the other end to the mains socket. 
        The type and location of the port will differ depending on your computer model.</span>`,

            `<span>Once both ends are connected, your computer will start charging. 
        To avoid running out of battery, plug your computer into mains power while you are using it.</span>`,
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
      StartMenu: [
         {
            link: "./animations/04_StartMenu/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_StartMenu/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_StartMenu/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_StartMenu/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/04_StartMenu/05/data.json",
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
      PowerButton: [
         {
            link: "./animations/06_PowerButton/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_PowerButton/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_PowerButton/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_PowerButton/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Touchpad: [
         {
            link: "./animations/07_Touchpad/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_Touchpad/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_Touchpad/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/07_Touchpad/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShinkedScrollScaling",
         },
         {
            link: "./animations/07_Touchpad/05/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShinkedScrollScaling",
         },
      ],
      Keyboard: [
         {
            link: "./animations/08_Keyboard/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      LeftPorts: [
         {
            link: "./animations/09_LeftPorts/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_LeftPorts/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_LeftPorts/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_LeftPorts/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      RightChargingPort: [
         {
            link: "./animations/10_RightChargingPort/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_RightChargingPort/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
   };

export default {
   hotlinks,
   panelContent,
   animationsObject,
};

// const deviceTitle = "Get to know your Windows laptop",
//    device = "device__laptop",
//    deviceFront__Id = "#laptop__front",
//    deviceLeft__Id = "#laptop__left",
//    deviceRight__Id = "#laptop__right",
//    turnDeviceLeftAltCTA_Text = "View left",
//    turnDeviceRightAltCTA_Text = "View right",
//    turnDeviceFrontAltCTA_Text = "View front";
