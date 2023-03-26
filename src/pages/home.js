import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

function Home() {
    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}
                text={"Descubra seus filmes favoritos!"} />
            <Card />
        </div>
    )
}
export default Home;