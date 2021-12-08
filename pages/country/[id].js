import React from 'react'
import Layout from '../../src/component/Layout';
import Head from "next/head"

const getCountry = async (id) => {
    const res = await fetch(`https://restcountries.com/v3.1/${id}`);
    const country = await res.json();
    return country;
}

const Country = ({ country }) => {
    console.log(country);
    const [borders, setBorders] = React.useState([]);

    const getBorders = async () => {
        const borders = await Promise.all(country.borders.map(border => getCountry(border)));

        setBorders(borders);
    };
    React.useEffect(() => {
        getBorders();
    },
        []);
    console.log(borders);
    return (
        <Layout>
            <Head>
                <title>{country.name}</title>
            </Head>
            <div className="container justify-content-center py-4">
                <h3 className="display-6">{country.name}</h3>
                <div className="row">
                    <div className="col-lg-7 py-4">
                        <img className="border" src={country.flags.map(({ name }) => name).join(", ")} alt={country.name} width="100%" ></img>
                    </div>
                    <div className="col-lg-5 px-5 py-2">
                        <p className = "fs-5"><strong>Native Name:</strong> {country.nativeName}</p>
                        <p className = "fs-5"><strong>Capital:</strong> {country.capital}</p>
                        <p className = "fs-5"><strong>Population:</strong> {country.population}</p>
                        <p className = "fs-5"><strong>Region:</strong> {country.region}</p>
                        <p className = "fs-5"><strong>Sub-region:</strong> {country.subregion}</p>
                        <p className = "fs-5"><strong>Area:</strong> {country.area} </p>
                        <p className = "fs-5"><strong>Country Code:</strong> +{country.callingCodes}</p>
                        <p className = "fs-5"><strong>Languages:</strong> {country.languages.map(({ name }) => name).join(", ")}</p>
                        <p className = "fs-5"><strong>Currencies:</strong> {country.currencies.map(({ name }) => name).join(", ")}</p>
                        <p className = "fs-5"><strong>Timezones:</strong> {country.timezones}</p>
                    </div>
                    <div className="container justify-content-center py-3 border">
                        <div className="row">
                            {borders.map(({ flag, name }) =>

                                <div className="col-lg-4 py-3 px-2">
                                    <div className="fs-4 display-3 py-3"> {name}</div>
                                    <img className="border" src={flag} alt={name} width="100%" height = "auto"></img>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Country;

export const getStaticPaths = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await res.json();
    const paths = countries.map(country => ({
        params: { id: country.alpha3Code },
    }));
    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async ({ params }) => {

    const country = await getCountry(params.id);
    return {
        props: {
            country,
        },
    }
}
