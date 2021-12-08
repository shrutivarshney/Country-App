import React from 'react'
import Link from 'next/link'

var d = new Date();

const CountriesTable = ({ countries }) => {
    return (
        <div>
            {countries.map((country) => (<div class="container justify-content-center col-lg-8 py-4">
                <div className="py-3">
                    <div className="card shadow-sm">
                        <div className="row g-0">
                            <div className="col-md-5 px-3 py-3">
                                <img className="border" src={country.flags.map(({ name }) => name).join(", ")} alt={country.name} width="100%"></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <p className="d-block"><strong>Name: </strong>{country.name}</p>
                                    <p className="d-block"><strong>Currency:</strong> {country.currencies.map(({ name }) => name).join(", ")}</p>
                                    <p className="d-block"><strong>Capital:</strong> {country.capital}</p>
                                    <a className="btn btn-outline-primary col-md-6 rounded-0 mx-2" target="_blank"  role="button" href={`https://maps.google.com/?q=${country.latlng}`}>Show Map</a>
                                    <Link href={`/country/${country.alpha3Code}`}><a className="btn btn-outline-primary col-md-5 rounded-0" role="button">Details</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))
            }
        </div>
    )
}

export default CountriesTable;
