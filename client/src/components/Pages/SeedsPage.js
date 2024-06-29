const seeds = [
    {
    id: 0,
    name: "Imperial Muskmelon",
    latinName: "Cucumis melo",
    location: 0,
    dateAdded: "2024-06-01",
    types: ["Fruit", "Melon"],
    },
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},

    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
    {},{},{},{},{},{},{},{},{},{},
];
const types = ["Fruit", "Vegetable", "Herb", "Open Pollinated", 
                "Heirloom", "Hybrid", "Onion", "Pepper", "Tomato",
                "Cucumber", "Melon", "Squash", "Pumpkin", "Bean",
                "Pea", "Lettuce", "Greens", "Carrot", "Radish",
                "Beet", "Cabbage", "Borrasca", "Spinach", "Kale",
                "Medicinal", "Potato", "Caffinated", "Trees", "Grasses",
                "Perennial", "Annual", "Biennial", "Flowers", "Ornamental"];


export default function SeedsPage(){
    return(
        <div>
            <h1 className="font-bold text-xl">Seeds</h1>
        </div>
    );
}