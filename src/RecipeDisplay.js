const RecipeDisplay = () => {

    return (     
            <section className="cakes">
                <h2>Welcome to the Bakery!</h2>
                <img src="https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?k=20&m=1187830875&s=612x612&w=0&h=LoRXyD8Jw9N-CfkKtXe23uHctZUetcH5zZFMwIzXapU="></img>
                <div className="cakes_container">
                    <div className="cakes_card">
                        <h3>{cakeNames[0]}</h3>
                        <ul>
                            {cakeIngredients[0].map((ingredient, index) => <li key={ingredient+index}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="cakes_card">
                        <h3>{cakeNames[1]}</h3>
                        <ul>
                            {cakeIngredients[1].map((ingredient, index) => <li key={ingredient+index}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="cakes_card">
                        <h3>{cakeNames[2]}</h3>
                        <ul>
                            {cakeIngredients[2].map((ingredient, index) => <li key={ingredient+index}>{ingredient}</li>)}
                        </ul>
                    </div>
                    <div className="cakes_card">
                        <h3>{cakeNames[3]}</h3>
                        <ul>
                            {cakeIngredients[3].map((ingredient, index) => <li key={ingredient+index}>{ingredient}</li>)}
                        </ul>
                    </div>
                </div>
                <h3>Average Cake Rating: {averageRating(cakes)}</h3>
            </section>
    );

}

const cakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]

const cakeNames = cakes.map((cake) => cake.cakeName);
const cakeIngredients = cakes.map((cake) => cake.ingredients);

const averageRating = (ratings) => {
    let total = ratings.reduce((total, ratings) => total + ratings.rating, 0);
    return total/ratings.length;
};

export default RecipeDisplay;