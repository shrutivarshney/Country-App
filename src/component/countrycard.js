
export const getStaticProps = async () =>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await res.json();
    return{
        props: { 
            countries,
        }
    }
  }

const CountryCards = ({ countries }) => {
    return(
        <div className="card mt-4 p-3"> 
            <div className="row">
                {countries.map((country) =>(
                    <>
                        <div className="col-sm-4">
                            <img src={country.flag} alt={country.name} className="img-fluid img-responsive" width={100} height={100} />
                        </div>
                        <div className="col-sm-8">
                            <h3 className="pt-2">{country.name}</h3>
                            <p>
                                <span>Currency: {country.currencies[0].name}</span>
                                <span>Current date and time: {country.timezones}</span>
                            </p>
                            <a href="https://maps.google.com/?q=${country.latlng}" Target="_blank"><button className="btn btn-outline-primary border-2 btn1">Show Map</button></a>
                            <a href="detail.html?code=${country.alpha3Code}"><button className="btn btn-outline-primary border-2" id="detailBtn" value="${country.alpha3Code}">Detail</button></a>
                        </div>
                    </>
                ))}
                
            </div>
        </div>
    )
}

export default CountryCards;