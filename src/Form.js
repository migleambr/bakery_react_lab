const SubmissionForm = () => {

    return (
        <section className="submission-form">
            <h3>Submit a New Recipe:</h3>
            <form>
                <input type="text" name="name" placeholder="Your Full Name" id="user_name"></input>
                <input type="text" name="cake_name" placeholder="Name the Cake" id="cake_name"></input>
                <input type="text" name="ingredients" placeholder="List All Ingredients" id="ingredients"></input>
                <input type="text" name="recipe" placeholder="Describe the Recipe.." id="recipe"></input>
                <button id="submit_button">Submit the Cake!</button>
            </form>
        </section>
    );

}

export default SubmissionForm;