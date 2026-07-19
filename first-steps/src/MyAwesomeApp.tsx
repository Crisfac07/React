export function MyAwesomeApp(){
    const firstName = "Cris";
    const lastName = "Franco";
    const favoriteGames = ['Elden Ring', 'smash', 'Metal Gear'];
    const isActive = true;
    const address = {
        zipCode: 'ABC-123',
        country: 'Canada'

    };

    return (
        <>
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>

        <p>{1+1}</p>

        <h3>{favoriteGames.join(',')}</h3>
        <h2>{isActive? 'Active': 'Inactive'}</h2>
        <h3>{JSON.stringify(address)}</h3>

        </>
    );
}