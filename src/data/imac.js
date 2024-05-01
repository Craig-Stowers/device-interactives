var hotlinks = [
      {
         id: "Monitor",
         x: 23,
         y: 30,
      },
      {
         id: "Webcam",
         x: 40,
         y: 18.7,
      },
      {
         id: "Desktop",
         x: 45,
         y: 30,
      },
      {
         id: "AppleMenu",
         x: 8,
         y: 12,
      },
      {
         id: "StatusSymbols",
         x: 52,
         y: 12,
      },
      {
         id: "Dock",
         x: 34,
         y: 44,
      },
      {
         id: "HeadphonePort",
         x: 5,
         y: 50,
      },
      {
         id: "Mouse",
         x: 63,
         y: 69,
      },
      {
         id: "Keyboard",
         x: 34,
         y: 69,
      },
      {
         id: "RearPorts",
         x: 12,
         y: 60,
      },
      {
         id: "RearPowerButton",
         x: 61,
         y: 60,
      },
   ],
   panelContent = {
      Monitor: {
         title: ["Monitor"],
         content: [
            `<span>The <strong>monitor</strong>, or screen, lets you see what's happening on your iMac. 
        Your iMac's computing hardware is built into the rear of the monitor.</span> `,
         ],
      },
      Webcam: {
         title: ["Webcam"],
         content: [
            `<span>Your iMac has a camera at the top of the monitor called a <strong>webcam</strong>. 
        It's used for making FaceTime and video calls and automatically turns on when you need it.</span>`,

            `<span>A small light may be visible when the webcam is in use.</span>`,
         ],
      },
      Desktop: {
         title: ["Desktop"],
         content: [
            `<span>The <strong>desktop</strong> is the main screen on your iMac. 
        It's a quick way to find the apps, functions, files and folders you need.</span>`,
         ],
      },
      AppleMenu: {
         title: ["Apple Menu"],
         content: [
            `<span>The <strong>Apple Menu</strong> contains a list of important functions and settings, including:</span>
        <span><strong>System Settings:</strong> For accessing features and menus that let you set up your iMac the way you like.</span>`,

            `<span><strong>Sleep:</strong> For saving power when you're not using your iMac. 
        To wake up your iMac, press any key on your keyboard or click your mouse.</span>`,

            `<span><strong>Shut Down:</strong> For turning off your iMac to stop it from using power.  
        To turn your iMac back on, press and hold the power button behind the screen on the left.</span>`,
         ],
      },
      StatusSymbols: {
         title: ["Status symbols"],
         content: [
            `<span>The icons displayed on the top right of the screen provide useful information and tools, such as:</span>
        <span><strong>Wi-Fi:</strong> Indicates if your iMac is connected to Wi-Fi and the internet.</span>
        `,

            `<span><strong>Spotlight:</strong> Find files and applications on your iMac by typing into a search 
        field then choosing from the list of results.</span>`,

            `<span><strong>Control Centre:</strong> Lets you adjust common settings such as volume, screen brightness and wireless connections.</span>`,

            `<span><strong>Date and time:</strong> The current date and time are displayed here. 
        You can click it to open the <strong>Notification Centre</strong> and view messages and updates you might have missed.</span>`,
         ],
      },
      Dock: {
         title: ["Dock"],
         content: [
            `<span>The <strong>Dock</strong> lets you quickly access frequently used applications, including:</span>
        <span><strong>Finder:</strong> For locating documents, downloads, and applications installed on your iMac.</span>
        `,

            `<span><strong>Safari:</strong> For browsing the internet.</span>`,

            `<span><strong>Mail:</strong> For reading and sending emails.</span>`,

            `<span><strong>FaceTime:</strong> For making video calls.</span>`,

            `<span><strong>Calendar:</strong> For making and keeping track of appointments.</span>`,
         ],
      },
      HeadphonePort: {
         title: ["Headphone Port"],
         content: [`<span>This lets you connect cabled  headphones or an additional speaker to your iMac.</span>`],
      },
      Mouse: {
         title: ["Mouse", "Left click", "Right click", "Scroll wheel"],
         content: [
            `<span>The mouse  allows you to select and open items on the screen. 
        As you move your mouse, the <strong>pointer</strong> will move in the same direction. 
        The pointer can also be called a <strong>cursor</strong>.</span>`,

            `<span>To select an item,  
        move the pointer over it and click once on the left button of your mouse. 
        To open the item, click it twice quickly. This is called a <strong>double click.</strong></span>`,

            `<span>To see more options for an item, 
        move the mouse pointer over it and click once on the right button of your mouse. 
        A menu will open and you can left click the option you want, or left click outside the menu to close it.</span>`,

            `<span>If your mouse has a small wheel, 
        you can roll it forward or back with your finger to scroll through a web page or document.</span>`,
         ],
      },
      Keyboard: {
         title: ["Keyboard"],
         content: [
            `<span>The keyboard lets you type letters, numbers and symbols. 
        It also lets you adjust volume, sound and many other settings.</span>`,
         ],
      },
      RearPorts: {
         title: ["Connector ports", "USB ports", "Power cable"],
         content: [
            `<span>Your iMac has sockets, or ports, for connecting devices, such as a camera, 
        mouse, keyboard, or memory stick for saving and sharing files.</span>`,

            `<span>Devices connect  to the ports on your iMac via USB cables. There are different types of USB cables, 
        and you may need an adapter to match the port on your iMac.</span>`,

            `<span>For your iMac to work, it needs to be plugged into mains power. 
        Connect the iMac's power cable into this port and the other end to the mains socket.</span>`,
         ],
      },
      RearPowerButton: {
         title: ["Power Button"],
         content: [
            `<span>To turn your iMac on, briefly press and hold the power button. 
        An Apple logo will appear on the screen, and you might also hear a chime.</span>`,

            `<span>To turn your iMac off, save and close any files and applications you have open, 
        then briefly press and hold the power button.</span>`,
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
      HeadphonePort: [
         {
            link: "./animations/07_HeadphonePort/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      Mouse: [
         {
            link: "./animations/08_Mouse/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Mouse/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Mouse/03/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/08_Mouse/04/data.json",
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
      RearPorts: [
         {
            link: "./animations/10_RearPorts/01/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_RearPorts/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/10_RearPorts/03/data.json",
            loop: false,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
      RearPowerButton: [
         {
            link: "./animations/11_RearPowerButton/01/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
         {
            link: "./animations/11_RearPowerButton/02/data.json",
            loop: true,
            static: false,
            isImage: false,
            class: "mobileShrinkedNormalScaling",
         },
      ],
   };

const deviceTitle = "Get to know your iMac",
   device = "device__iMac",
   deviceFront__Id = "#iMac__front",
   deviceBack__Id = "#iMac__back",
   turnDeviceBackAltCTA_Text = "View iMac back",
   turnDeviceFrontAltCTA_Text = "View iMac front";

export {
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
