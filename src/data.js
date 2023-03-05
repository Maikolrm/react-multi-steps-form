export const data = {
  steps: [
    { id: 1, name: "your info", invalid: false },
    { id: 2, name: "select plan", invalid: false },
    { id: 3, name: "add-ons", invalid: false },
    { id: 4, name: "sumary", invalid: false }
  ],
  currentStep: 0,
  formData: {
    heading: "personal info",
    description: "please provide your name, email address and phone number",
    fields: [
      {
        id: 1,
        label: "name",
        name: "name",
        value: "",
        invalid: false,
        hint: ""
      },
      {
        id: 2,
        label: "email",
        name: "email",
        value: "",
        invalid: false,
        hint: ""
      },
      {
        id: 3,
        label: "phone number",
        name: "phone",
        value: "",
        invalid: false,
        hint: ""
      }
    ] // fields array end
  },
  plans: {
    heading: "select your plan",
    description: "you have the option of monthly or yearly billing",
    options: [
      {
        id: 1,
        name: "arcade",
        price: 9,
        icon: "icon-arcade.svg",
        selected: true
      },
      {
        id: 2,
        name: "advanced",
        price: 12,
        icon: "icon-advanced.svg",
        selected: false
      },
      {
        id: 3,
        name: "pro",
        price: 15,
        icon: "icon-pro.svg",
        selected: false
      }
    ],
    monthly: true
  },
  addons: {
    heading: "pick add-ons",
    description: "add-ons help enhance your gaming experience",
    options: [
      {
        id: 1,
        name: "online service",
        description: "access to multiplayer games",
        price: 1,
        checked: true
      },
      {
        id: 2,
        name: "larger storage",
        description: "extra 1TB og cloud save",
        price: 2,
        checked: false
      },
      {
        id: 3,
        name: "customizable profile",
        description: "custom theme on your profile",
        price: 2,
        checked: false
      }
    ]
  },
  requestCount: 0
}
