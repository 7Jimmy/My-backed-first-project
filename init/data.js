const sampleData = [
    {
        title: "Luxury Villa",
        description: "A modern luxury villa with a private pool and garden.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50000,
        location: "Islamabad, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Cozy Apartment",
        description: "A small and cozy apartment in the city center.",
        image: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        location: "Lahore, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Beach House",
        description: "A beach house with stunning ocean views.",
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60000,
        location: "Gwadar, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Farmhouse Retreat",
        description: "A peaceful farmhouse surrounded by greenery.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Multan, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Penthouse Suite",
        description: "A luxury penthouse with panoramic city views.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70000,
        location: "Karachi, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Modern Office Space",
        description: "Office space perfect for startups.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        location: "Rawalpindi, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Suburban House",
        description: "A family home in a quiet neighborhood.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Peshawar, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Vacation Cabin",
        description: "A cozy cabin ideal for weekend retreats.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 12000,
        location: "Murree, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Commercial Shop",
        description: "A spacious shop in a busy marketplace.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Quetta, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Studio Apartment",
        description: "A compact studio apartment.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 8000,
        location: "Faisalabad, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Luxury Mansion",
        description: "A sprawling mansion with modern amenities.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100000,
        location: "Islamabad, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Eco-Friendly Home",
        description: "A sustainable home with solar panels.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30000,
        location: "Lahore, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Cottage",
        description: "A charming cottage for a peaceful stay.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        location: "Swat, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Luxury Hotel Suite",
        description: "A five-star hotel suite for a lavish stay.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80000,
        location: "Karachi, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Warehouse",
        description: "A spacious warehouse for storage.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        location: "Sialkot, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Mountain Retreat",
        description: "A beautiful mountain retreat for nature lovers.",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Hunza, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Affordable Apartment",
        description: "A budget-friendly apartment.",
        image: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 10000,
        location: "Hyderabad, Pakistan",
        country: "Pakistan",
    },
    {
        title: "City Condo",
        description: "A modern condo in a prime city location.",
        image: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40000,
        location: "Lahore, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Lake House",
        description: "A serene house by the lake.",
        image: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35000,
        location: "Mansehra, Pakistan",
        country: "Pakistan",
    },
    {
        title: "Desert Camp",
        description: "A unique desert camp experience.",
        image: "https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 15000,
        location: "Thar, Pakistan",
        country: "Pakistan",
    },
];

module.exports={data:sampleData}