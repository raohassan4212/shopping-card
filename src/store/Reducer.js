const INITIAL_STATE = {
    productsLists: [
        {
          id: "ABC123",
          title: "Iphone X",
          description: "The best smart phone avaliable on earth",
          price: 100,
          varients: [
            {
              title: "Capacity",
              items: [
                {
                  title: "16gb",
                  price: 5
                },
                {
                  title: "32gb",
                  price: 10
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "Black",
                  price: 10
                },
                {
                  title: "Silver",
                  price: 15
                },
                {
                  title: "White",
                  price: 20
                },
                {
                  title: "Golden",
                  price: 25
                }
              ]
            }
          ]
        },
        {
          id: "ABC456",
          title: "Cat Shoes",
          description: "The best shoes avaliable on earth",
          price: 150,
          varients: [
            {
              title: "Shoe Size",
              items: [
                {
                  title: "12",
                  price: 5
                },
                {
                  title: "11",
                  price: 10
                },
                {
                  title: "10",
                  price: 15
                },
                {
                  title: "09",
                  price: 20
                },
                {
                  title: "08",
                  price: 25
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "Golden",
                  price: 5
                },
                {
                  title: "White",
                  price: 10
                },
                {
                  title: "Black",
                  price: 15
                }
              ]
            }
          ]
        },
        {
          id: "ABC789",
          title: "Bags",
          description: "The best Bags avaliable on earth",
          price: 60,
          varients: [
            {
              title: "Bags Size",
              items: [
                {
                  title: "small",
                  price: 5
                },
                {
                  title: "medium",
                  price: 10
                },
                {
                  title: "large",
                  price: 15
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "yellow",
                  price: 5
                },
                {
                  title: "brown",
                  price: 10
                },
                {
                  title: "green",
                  price: 15
                }
              ]
            }
          ]
        },
        {
          id: "ABC012",
          title: "T shirts",
          description: "The best T shirts avaliable on earth",
          price: 20,
          varients: [
            {
              title: "Size",
              items: [
                {
                  title: "small",
                  price: 5
                },
                {
                  title: "medium",
                  price: 10
                },
                {
                  title: "large",
                  price: 15
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "white",
                  price: 5
                },
                {
                  title: "black",
                  price: 10
                },
                {
                  title: "green",
                  price: 15
                }
              ]
            }
          ]
        },
        {
          id: "ABC023",
          title: "T shirts",
          description: "The best T shirts avaliable on earth",
          price: 45,
          varients: [
            {
              title: "Size",
              items: [
                {
                  title: "small",
                  price: 5
                },
                {
                  title: "medium",
                  price: 10
                },
                {
                  title: "large",
                  price: 15
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "white",
                  price: 2
                },
                {
                  title: "black",
                  price: 3
                },
                {
                  title: "green",
                  price: 5
                }
              ]
            }
          ]
        },
        {
          id: "ABC034",
          title: "Rollex Watch",
          description: "The best watch avaliable on earth",
          price: 200,
          varients: [
            {
              title: "Rist Size",
              items: [
                {
                  title: "small",
                  price: 5
                },
                {
                  title: "medium",
                  price: 15
                },
                {
                  title: "large",
                  price: 25
                }
              ]
            },
            {
              title: "Color",
              items: [
                {
                  title: "black",
                  price: 21
                },
                {
                  title: "glod",
                  price: 24
                },
                {
                  title: "silver",
                  price: 28
                }
              ]
            }
          ]
        }
      ],

      addProducts: []  
}

const Reducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
                case "ADDPRODUCT":
                    return {
                        ...state,
                        addProducts: action.addProducts
        
                    }
                default:
                    return state
            }
}

export default Reducer;