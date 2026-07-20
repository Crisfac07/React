import { CSSProperties } from "react";

export function MyAwesomeApp(){
    const myStyles : CSSProperties = {
        backgroundColor: '#FAFAFA',
        borderRadius :  20,
        padding : 10,
        marginTop: 30
    };
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

        <h3 style={myStyles}>{favoriteGames.join(',')}</h3>
        <h2>{isActive? 'Active': 'Inactive'}</h2>
        <h3>{JSON.stringify(address)}</h3>

        </>
    );
}