// _ at the start of the filename is just a naming convension to use for data files, not necessary

let games = [
    {
      "id": "1",
      "name": "The Adventure Begins",
      "description": "An exciting open-world adventure game.",
      "price": 59.99,
      "image": "https://example.com/adventure.jpg",
      "rating": 4.5,
      "platforms": ["PC", "PS5", "Xbox"],
      "genres": ["Adventure", "Action"],
      "releaseDate": "2023-05-01",
      "reviews": [
        {
          "id": "r1",
          "rating": 5,
          "content": "Incredible experience!",
          "author": {
            "id": "1001",
            "name": "John Doe",
            "age": 35,
            "verified": true
          }
        },
        {
          "id": "r2",
          "rating": 4,
          "content": "Loved the world-building!",
          "author": {
            "id": "1002",
            "name": "Jane Smith",
            "age": 28,
            "verified": false
          }
        }
      ]
    },
    {
      "id": "2",
      "name": "Space Odyssey",
      "description": "A futuristic space exploration game.",
      "price": 49.99,
      "image": "https://example.com/space.jpg",
      "rating": 4.0,
      "platforms": ["PC", "PS5"],
      "genres": ["Sci-Fi", "Exploration"],
      "releaseDate": "2024-01-15",
      "reviews": [
        {
          "id": "r3",
          "rating": 5,
          "content": "Exploration at its finest.",
          "author": {
            "id": "1003",
            "name": "Alice Johnson",
            "age": 30,
            "verified": true
          }
        },
        {
          "id": "r4",
          "rating": 3,
          "content": "Graphics are great but lacks content.",
          "author": {
            "id": "1004",
            "name": "Bob Lee",
            "age": 27,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "3",
      "name": "Racing Revolution",
      "description": "The ultimate racing experience.",
      "price": 39.99,
      "image": "https://example.com/racing.jpg",
      "rating": 4.8,
      "platforms": ["PC", "Xbox"],
      "genres": ["Racing", "Sports"],
      "releaseDate": "2023-08-22",
      "reviews": [
        {
          "id": "r5",
          "rating": 5,
          "content": "Fast-paced and thrilling!",
          "author": {
            "id": "1005",
            "name": "Charlie Adams",
            "age": 40,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "4",
      "name": "Medieval Warfare",
      "description": "Step into the battlefield of the medieval era.",
      "price": 45.00,
      "image": "https://example.com/medieval.jpg",
      "rating": 4.2,
      "platforms": ["PS5", "PC"],
      "genres": ["Strategy", "Action"],
      "releaseDate": "2022-12-15",
      "reviews": [
        {
          "id": "r6",
          "rating": 4,
          "content": "Very strategic and well thought-out.",
          "author": {
            "id": "1006",
            "name": "Emily Clark",
            "age": 32,
            "verified": false
          }
        },
        {
          "id": "r7",
          "rating": 3,
          "content": "Could use better combat mechanics.",
          "author": {
            "id": "1007",
            "name": "David Martin",
            "age": 29,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "5",
      "name": "Mystic Quest",
      "description": "A magical journey through enchanted lands.",
      "price": 49.99,
      "image": "https://example.com/mystic.jpg",
      "rating": 4.6,
      "platforms": ["PC", "Switch"],
      "genres": ["RPG", "Fantasy"],
      "releaseDate": "2023-07-10",
      "reviews": [
        {
          "id": "r8",
          "rating": 5,
          "content": "A mesmerizing RPG with deep storytelling.",
          "author": {
            "id": "1008",
            "name": "Samantha Harris",
            "age": 26,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "6",
      "name": "CyberCity",
      "description": "Futuristic cyberpunk open-world game.",
      "price": 69.99,
      "image": "https://example.com/cybercity.jpg",
      "rating": 3.9,
      "platforms": ["PC", "PS5"],
      "genres": ["Sci-Fi", "Action"],
      "releaseDate": "2023-04-22",
      "reviews": [
        {
          "id": "r9",
          "rating": 4,
          "content": "Great world-building, but buggy.",
          "author": {
            "id": "1009",
            "name": "Alex White",
            "age": 31,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "7",
      "name": "Farm Simulator",
      "description": "Experience life as a farmer.",
      "price": 34.99,
      "image": "https://example.com/farm.jpg",
      "rating": 4.1,
      "platforms": ["PC", "Switch"],
      "genres": ["Simulation", "Strategy"],
      "releaseDate": "2023-03-10",
      "reviews": [
        {
          "id": "r10",
          "rating": 4,
          "content": "Relaxing and surprisingly fun.",
          "author": {
            "id": "1010",
            "name": "Michael Turner",
            "age": 22,
            "verified": false
          }
        }
      ]
    },
    {
      "id": "8",
      "name": "Puzzle Paradise",
      "description": "A collection of challenging puzzles.",
      "price": 19.99,
      "image": "https://example.com/puzzle.jpg",
      "rating": 4.3,
      "platforms": ["PC", "Switch"],
      "genres": ["Puzzle", "Casual"],
      "releaseDate": "2023-06-18",
      "reviews": [
        {
          "id": "r11",
          "rating": 5,
          "content": "Perfect for puzzle lovers!",
          "author": {
            "id": "1011",
            "name": "Jessica Lee",
            "age": 24,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "9",
      "name": "Football Frenzy",
      "description": "Action-packed football simulation game.",
      "price": 59.99,
      "image": "https://example.com/football.jpg",
      "rating": 4.4,
      "platforms": ["PC", "Xbox", "PS5"],
      "genres": ["Sports", "Simulation"],
      "releaseDate": "2023-02-28",
      "reviews": [
        {
          "id": "r12",
          "rating": 5,
          "content": "Best football game I've played!",
          "author": {
            "id": "1012",
            "name": "Kevin Brown",
            "age": 29,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "10",
      "name": "Zombie Outbreak",
      "description": "Survive in a world overrun by zombies.",
      "price": 44.99,
      "image": "https://example.com/zombie.jpg",
      "rating": 3.5,
      "platforms": ["PC", "PS5"],
      "genres": ["Horror", "Survival"],
      "releaseDate": "2023-09-10",
      "reviews": [
        {
          "id": "r13",
          "rating": 3,
          "content": "Good concept, but poorly executed.",
          "author": {
            "id": "1013",
            "name": "Lisa Wong",
            "age": 33,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "11",
      "name": "Hero's Journey",
      "description": "A classic hero's journey in a fantasy world.",
      "price": 54.99,
      "image": "https://example.com/hero.jpg",
      "rating": 4.7,
      "platforms": ["PC", "PS5"],
      "genres": ["Fantasy", "RPG"],
      "releaseDate": "2023-05-12",
      "reviews": [
        {
          "id": "r14",
          "rating": 5,
          "content": "Epic story and gameplay!",
          "author": {
            "id": "1014",
            "name": "Ethan Bell",
            "age": 25,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "12",
      "name": "City Builder",
      "description": "Design and manage your own city.",
      "price": 49.99,
      "image": "https://example.com/citybuilder.jpg",
      "rating": 4.2,
      "platforms": ["PC", "Switch"],
      "genres": ["Simulation", "Strategy"],
      "releaseDate": "2023-01-22",
      "reviews": [
        {
          "id": "r15",
          "rating": 4,
          "content": "A must-have for city-building fans.",
          "author": {
            "id": "1015",
            "name": "Grace Davis",
            "age": 27,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "13",
      "name": "Alien Invasion",
      "description": "Defend Earth from alien invaders.",
      "price": 39.99,
      "image": "https://example.com/alien.jpg",
      "rating": 4.0,
      "platforms": ["PC", "PS5"],
      "genres": ["Action", "Sci-Fi"],
      "releaseDate": "2023-07-01",
      "reviews": [
        {
          "id": "r16",
          "rating": 4,
          "content": "Fun but a bit repetitive.",
          "author": {
            "id": "1016",
            "name": "Liam Wilson",
            "age": 32,
            "verified": false
          }
        }
      ]
    },
    {
      "id": "14",
      "name": "Wild West",
      "description": "Experience life as a cowboy in the wild west.",
      "price": 59.99,
      "image": "https://example.com/wildwest.jpg",
      "rating": 4.5,
      "platforms": ["PC", "Xbox", "PS5"],
      "genres": ["Action", "Adventure"],
      "releaseDate": "2023-03-15",
      "reviews": [
        {
          "id": "r17",
          "rating": 5,
          "content": "Loved the cowboy experience!",
          "author": {
            "id": "1017",
            "name": "Olivia Parker",
            "age": 24,
            "verified": true
          }
        }
      ]
    },
    {
      "id": "15",
      "name": "Future Racer",
      "description": "High-speed futuristic racing game.",
      "price": 49.99,
      "image": "https://example.com/futureracer.jpg",
      "rating": 4.6,
      "platforms": ["PC", "PS5"],
      "genres": ["Racing", "Sci-Fi"],
      "releaseDate": "2023-08-20",
      "reviews": [
        {
          "id": "r18",
          "rating": 5,
          "content": "Fast and futuristic!",
          "author": {
            "id": "1018",
            "name": "Noah Hernandez",
            "age": 21,
            "verified": true
          }
        }
      ]
    }
  ]
  
  let authors = [
    {
      "id": "1001",
      "name": "John Doe",
      "age": 35,
      "games": [
        {
          "id": "1",
          "name": "The Adventure Begins",
          "price": 59.99,
          "rating": 4.7
        }
      ],
      "verified": true
    },
    {
      "id": "1002",
      "name": "Jane Smith",
      "age": 28,
      "games": [
        {
          "id": "1",
          "name": "The Adventure Begins",
          "price": 59.99,
          "rating": 4.7
        }
      ],
      "verified": false
    },
    {
      "id": "1003",
      "name": "Alice Johnson",
      "age": 30,
      "games": [
        {
          "id": "2",
          "name": "Space Odyssey",
          "price": 49.99,
          "rating": 4.5
        }
      ],
      "verified": true
    },
    {
      "id": "1005",
      "name": "Charlie Adams",
      "age": 40,
      "games": [
        {
          "id": "3",
          "name": "Racing Revolution",
          "price": 39.99,
          "rating": 4.8
        }
      ],
      "verified": true
    },
    {
      "id": "1007",
      "name": "David Martin",
      "age": 29,
      "games": [
        {
          "id": "4",
          "name": "Medieval Warfare",
          "price": 59.99,
          "rating": 4.3
        }
      ],
      "verified": true
    },
    {
      "id": "1008",
      "name": "Samantha Harris",
      "age": 26,
      "games": [
        {
          "id": "5",
          "name": "Mystic Quest",
          "price": 59.99,
          "rating": 4.9
        }
      ],
      "verified": true
    },
    {
      "id": "1009",
      "name": "Alex White",
      "age": 31,
      "games": [
        {
          "id": "6",
          "name": "CyberCity",
          "price": 49.99,
          "rating": 4.4
        }
      ],
      "verified": true
    },
    {
      "id": "1010",
      "name": "Michael Turner",
      "age": 22,
      "games": [
        {
          "id": "7",
          "name": "Farm Simulator",
          "price": 29.99,
          "rating": 4.0
        }
      ],
      "verified": false
    },
    {
      "id": "1011",
      "name": "Jessica Lee",
      "age": 24,
      "games": [
        {
          "id": "8",
          "name": "Puzzle Paradise",
          "price": 19.99,
          "rating": 4.5
        }
      ],
      "verified": true
    },
    {
      "id": "1012",
      "name": "Kevin Brown",
      "age": 29,
      "games": [
        {
          "id": "9",
          "name": "Football Frenzy",
          "price": 59.99,
          "rating": 4.7
        }
      ],
      "verified": true
    },
    {
      "id": "1013",
      "name": "Lisa Wong",
      "age": 33,
      "games": [
        {
          "id": "10",
          "name": "Zombie Outbreak",
          "price": 49.99,
          "rating": 3.9
        }
      ],
      "verified": true
    },
    {
      "id": "1014",
      "name": "Ethan Bell",
      "age": 25,
      "games": [
        {
          "id": "11",
          "name": "Hero's Journey",
          "price": 59.99,
          "rating": 4.9
        }
      ],
      "verified": true
    },
    {
      "id": "1015",
      "name": "Grace Davis",
      "age": 27,
      "games": [
        {
          "id": "12",
          "name": "City Builder",
          "price": 49.99,
          "rating": 4.2
        }
      ],
      "verified": true
    },
    {
      "id": "1017",
      "name": "Olivia Parker",
      "age": 24,
      "games": [
        {
          "id": "14",
          "name": "Wild West",
          "price": 59.99,
          "rating": 4.5
        }
      ],
      "verified": true
    },
    {
      "id": "1018",
      "name": "Noah Hernandez",
      "age": 21,
      "games": [
        {
          "id": "15",
          "name": "Future Racer",
          "price": 49.99,
          "rating": 4.6
        }
      ],
      "verified": true
    }
  ]
  
  let reviews =  [
    {
      "id": "r1",
      "rating": 5,
      "content": "Incredible experience!",
      "game": {
        "id": "1",
        "name": "The Adventure Begins"
      },
      "author": {
        "id": "1001",
        "name": "John Doe",
        "age": 35,
        "verified": true
      }
    },
    {
      "id": "r2",
      "rating": 4,
      "content": "Loved the world-building!",
      "game": {
        "id": "1",
        "name": "The Adventure Begins"
      },
      "author": {
        "id": "1002",
        "name": "Jane Smith",
        "age": 28,
        "verified": false
      }
    },
    {
      "id": "r3",
      "rating": 5,
      "content": "Exploration at its finest.",
      "game": {
        "id": "2",
        "name": "Space Odyssey"
      },
      "author": {
        "id": "1003",
        "name": "Alice Johnson",
        "age": 30,
        "verified": true
      }
    },
    {
      "id": "r5",
      "rating": 5,
      "content": "Fast-paced and thrilling!",
      "game": {
        "id": "3",
        "name": "Racing Revolution"
      },
      "author": {
        "id": "1005",
        "name": "Charlie Adams",
        "age": 40,
        "verified": true
      }
    },
    {
      "id": "r7",
      "rating": 3,
      "content": "Could use better combat mechanics.",
      "game": {
        "id": "4",
        "name": "Medieval Warfare"
      },
      "author": {
        "id": "1007",
        "name": "David Martin",
        "age": 29,
        "verified": true
      }
    },
    {
      "id": "r8",
      "rating": 5,
      "content": "A mesmerizing RPG with deep storytelling.",
      "game": {
        "id": "5",
        "name": "Mystic Quest"
      },
      "author": {
        "id": "1008",
        "name": "Samantha Harris",
        "age": 26,
        "verified": true
      }
    },
    {
      "id": "r9",
      "rating": 4,
      "content": "Great world-building, but buggy.",
      "game": {
        "id": "6",
        "name": "CyberCity"
      },
      "author": {
        "id": "1009",
        "name": "Alex White",
        "age": 31,
        "verified": true
      }
    },
    {
      "id": "r10",
      "rating": 4,
      "content": "Relaxing and surprisingly fun.",
      "game": {
        "id": "7",
        "name": "Farm Simulator"
      },
      "author": {
        "id": "1010",
        "name": "Michael Turner",
        "age": 22,
        "verified": false
      }
    },
    {
      "id": "r11",
      "rating": 5,
      "content": "Perfect for puzzle lovers!",
      "game": {
        "id": "8",
        "name": "Puzzle Paradise"
      },
      "author": {
        "id": "1011",
        "name": "Jessica Lee",
        "age": 24,
        "verified": true
      }
    },
    {
      "id": "r12",
      "rating": 5,
      "content": "Best football game I've played!",
      "game": {
        "id": "9",
        "name": "Football Frenzy"
      },
      "author": {
        "id": "1012",
        "name": "Kevin Brown",
        "age": 29,
        "verified": true
      }
    },
    {
      "id": "r13",
      "rating": 3,
      "content": "Good concept, but poorly executed.",
      "game": {
        "id": "10",
        "name": "Zombie Outbreak"
      },
      "author": {
        "id": "1013",
        "name": "Lisa Wong",
        "age": 33,
        "verified": true
      }
    },
    {
      "id": "r14",
      "rating": 5,
      "content": "Epic story and gameplay!",
      "game": {
        "id": "11",
        "name": "Hero's Journey"
      },
      "author": {
        "id": "1014",
        "name": "Ethan Bell",
        "age": 25,
        "verified": true
      }
    },
    {
      "id": "r15",
      "rating": 4,
      "content": "A must-have for city-building fans.",
      "game": {
        "id": "12",
        "name": "City Builder"
      },
      "author": {
        "id": "1015",
        "name": "Grace Davis",
        "age": 27,
        "verified": true
      }
    },
    {
      "id": "r17",
      "rating": 5,
      "content": "Loved the cowboy experience!",
      "game": {
        "id": "14",
        "name": "Wild West"
      },
      "author": {
        "id": "1017",
        "name": "Olivia Parker",
        "age": 24,
        "verified": true
      }
    },
    {
      "id": "r18",
      "rating": 5,
      "content": "Fast and fff!",
      "game": {
        "id": "15",
        "name": "Future Racer"
      },
      "author": {
        "id": "1018",
        "name": "Noah Hernandez",
        "age": 21,
        "verified": true
      }
    }
  ]
  export default { games, authors, reviews }