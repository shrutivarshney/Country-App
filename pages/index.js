import React from 'react'
import Head from "next/head"
import Layout from '../src/component/Layout.js'
import CountriesTable from '../src/component/CountriesTable.js'

export default function Home({ countries }) {
    console.log(countries);
    
    const [keyword, setKeyword] = React.useState("");
    const filterCountries = countries.filter(country => 
        country.name.toLowerCase().includes(keyword)||
        country.region.toLowerCase().includes(keyword)||
        country.subregion.toLowerCase().includes(keyword));
    const onInputChange = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    return (

        <Layout>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
                <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
            </Head>
  <div className="container justify-content-center col-lg-8 py-4">
          <h3 className="display-6"> Countries </h3>
          <form className="border">
          <div className="d-flex">
          <input type="search" className="form-control me-5 border-0 " id="search_input" placeholder="Search Countries" aria-label="Search" onChange = {onInputChange}/> 
          <button className="btn btn-large" type="submit"><i className="fa fa-search"></i></button>
          </div>
          </form>
            
  </div>
            <CountriesTable countries={filterCountries} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    return {
        props: {
            countries,
        }
    }
}
