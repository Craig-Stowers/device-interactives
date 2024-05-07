var hotlinks = [
      {
         id: "Monitor",
         x: 10,
         y: 33,
      },
      {
         id: "Webcam",
         x: 24,
         y: 18,
      },
      {
         id: "Desktop",
         x: 35,
         y: 33,
      },
      {
         id: "StartMenu",
         x: 2,
         y: 46,
      },
      {
         id: "StatusSymbols",
         x: 43,
         y: 46,
      },
      {
         id: "Mouse",
         x: 64,
         y: 67,
      },
      {
         id: "Keyboard",
         x: 30,
         y: 65,
      },
      {
         id: "PowerCable",
         x: 66,
         y: 52,
      },
      {
         id: "PowerButton",
         x: 59,
         y: 38,
      },
      {
         id: "Ports",
         x: 59,
         y: 30,
      },
      {
         id: "Case",
         x: 59,
         y: 20,
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
            `<span>Most monitors have a camera at the top called a <strong>webcam</strong>. It's used for making video calls and automatically turns on when you need it. </span>`,

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
        <span><strong>Wi-Fi:</strong> Indicates your computer is connected to Wi-Fi and the internet.</span>`,

            `<span><strong>Volume:</strong> For increasing, decreasing and muting sound on your computer.`,

            `<span><strong>Time and date:</strong> The current time and date are displayed here.</span>`,

            `<span><strong>Notifications:</strong> Click this symbol to view a summary of messages and updates you might have missed.</span>`,
         ],
      },
      Mouse: {
         title: ["Mouse", "Left click", "Right click", "Scroll wheel"],
         content: [
            `<span>The mouse allows you to select and open items on the screen. As you move your mouse, the <strong>pointer</strong> will move in the same direction. The pointer can also be called a <strong>cursor.</strong></span>`,

            `<span>To select an item, move the pointer over it and click once on the left button of your mouse. To open the item, click it twice quickly. This is called a <strong>double click.</strong></span>`,

            `<span>To see more options for an item, move the pointer over it and click once on the right button of your mouse. A menu will open and you can left click the option you want, or left click outside the menu to close it.</span>`,

            `<span>If your mouse has a small wheel, you can roll it forward or back with your finger to scroll through a web page or document.</span>`,
         ],
      },
      Keyboard: {
         title: ["Keyboard"],
         content: [
            `<span>The keyboard lets you type letters, numbers and symbols. It also lets you adjust volume, sound and many other settings.</span>`,
         ],
      },
      Case: {
         title: ["Case"],
         content: [
            `<span>The <strong>case</strong> contains the computing hardware of your Windows desktop. It is also called a <strong>computer case.</strong> For your computer to work, the monitor, keyboard and mouse must be connected to the case.</span>`,
         ],
      },
      Ports: {
         title: ["Ports", "USB ports", "HDMI port", "Headphone port"],
         content: [
            `<span>Your computer case has sockets, or ports, for connecting devices, such as a camera, mouse, keyboard, monitor, or memory stick for saving and sharing files.</span>`,

            `<span>Devices connect to the ports on your computer case via USB cables. There are different types of USB cables, and you may need an adapter to match the port on the case.</span>`,

            `<span>This port is used for connecting the case to your monitor.</span>`,

            `<span>This lets you connect cabled headphones or an additional speaker to your computer.</span>`,
         ],
      },
      PowerButton: {
         title: ["Power button"],
         content: [
            `<span>To turn your computer on, briefly press and hold the power button. It should be marked with the power symbol. When your computer is on, the monitor will show something on the screen.</span>`,

            `<span>To put your computer to sleep, press the power button once. <strong>Sleep mode</strong> saves power, so you can use it when away from your computer for short time.</span>`,

            `<span>To wake your computer from sleep, press the power button once. </span>`,

            `<span>To turn your computer off, save and close any files and applications you have open, then briefly press and hold the power button until the screen goes black</span>`,
         ],
      },
      PowerCable: {
         title: ["Power cable"],
         content: [
            `<span>For your computer to work, it needs to be plugged into mains power. Connect the computer's power cable from the computer to the mains socket.</span>`,
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
      ],
      Mouse: [
         {
            link: "./animations/06_Mouse/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Mouse/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Mouse/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/06_Mouse/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShinkedScrollScaling",
         },
      ],
      Keyboard: [
         {
            link: "./animations/07_Keyboard/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Case: [
         {
            link: "./animations/08_Case/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Ports: [
         {
            link: "./animations/09_Ports/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_Ports/02/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_Ports/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/09_Ports/04/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerButton: [
         {
            link: "./animations/10_PowerButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_PowerButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_PowerButton/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_PowerButton/04/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      PowerCable: [
         {
            link: "./animations/11_PowerCable/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
   };

export default { hotlinks, panelContent, animationsObject };

// const deviceTitle = "Get to know your Windows desktop",
//    device = "device__desktop",
//    deviceFront__Id = "#desktop__front";
