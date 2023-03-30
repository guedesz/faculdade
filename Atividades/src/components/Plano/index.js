import "./plano.css";

const planos = [
    {
        "name": "Plano 1",
        "price": "99,00",
        "details": "Info do plano 1",
    },
    {
        "name": "Plano 2",
        "price": "199,00",
        "details": "Info do plano 2",
    },
    {
        "name": "Plano 3",
        "price": "299,00",
        "details": "Info do plano 3",
    },
]
export default function Card() {
    return (
        <div className="container text-center">
          <div className="row">
            {planos.map((plano, i) => (
              <div className="col" key={i}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{plano.name} </h5>
                    <p className="card-text">{plano.details}</p>
                    <p className="card-text">{plano.price}</p>
                    <a
                      href={`/planos/comprar/${plano.name}`}
                    >
                      <div className="btn btn-primary">
                        Adquirir
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}
